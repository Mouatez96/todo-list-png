import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TodoService} from "../../services/todoService/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoForm !: FormGroup;
  todoList !: Todo [];

  constructor(private _fb: FormBuilder,
              private _service: TodoService) { }

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
        console.log('Task added successfully');
        this.getTodoList();
      },
      error: console.log
    })
  }

  getTodoList() {
    this._service.getTodoList().subscribe({
      next : (value) => {
        console.log(value)
        this.todoList = value;
        console.log(this.todoList)
      },
      error: console.log
    })
  }

}
