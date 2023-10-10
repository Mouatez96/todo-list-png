import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'http://localhost:3000/todo'
  constructor(private _http: HttpClient) { }

  getTodoList() {
    return this._http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo) {
    return this._http.post(this.apiUrl, todo);
  }

  deleteTodo(id: number) {
    return this._http.delete(this.apiUrl + `/${id}`)
  }

  updateTodo(id: number, todo: Todo) {
    if(!todo.completed) {
      todo.completed = false
      console.log(todo)
    }
    return this._http.patch(this.apiUrl +`/${id}`, todo);
  }
}
