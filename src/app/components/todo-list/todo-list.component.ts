import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TodoService} from "../../services/todoService/todo.service";
import {DialogService} from "primeng/dynamicdialog";
import {ConfirmDeleteItemComponent} from "../confirm-delete-item/confirm-delete-item.component";
import { CheckboxModule } from 'primeng/checkbox';
import {Message} from "primeng/api";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoForm !: FormGroup;
  todoList !: Todo [];
  messages !: Message[];
  constructor(private _fb: FormBuilder,
              private _service: TodoService,
              private _dialogService: DialogService) { }

  ngOnInit(): void {
    this.getTodoList();
    this.initForm();
  }

  initForm() {
    this.todoForm = this._fb.group({
      task: '',
      type: ''
    })
  }

  onSubmitForm() {

    this._service.addTodo(this.todoForm.value).subscribe({
      next: (value) => {
        this.messages = [{ severity: 'success', summary: '', detail: 'Task added successfully' }];
        this.getTodoList();
      },
      error: console.log
    })
  }

  getTodoList() {
    this._service.getTodoList().subscribe({
      next : (value) => {
        this.todoList = value;
        console.log(this.todoList)
      },
      error: console.log
    })
  }

  openDelete(id: number) {
    const refDialog = this._dialogService.open(ConfirmDeleteItemComponent, {})

    refDialog.onClose.subscribe({
      next: (value) => {
        if(value) {
          this._service.deleteTodo(id).subscribe({
            next: value => {
              console.log("Task deleted with success");
              this.getTodoList();
            }
          })
        }
      }
    })
  }

  updateTodo(todo: Todo) {
    this._service.updateTodo(todo.id, todo).subscribe({
      next: (value) => {
        console.log("Updated with success")

      }
    })
  }

}
