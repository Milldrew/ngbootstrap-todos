import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListStateService {
  todoLists: TodoList[] i;

  constructor() {
    this.todoLists = [{
      todoListTitle: 'First List',
      id: Date.now(),
      todos: [{id: Date.now() / 10, todoText: 'Finist bs todo list' , isDone: false},{id: Date.now() / 10, todoText: 'Finist bs todo list' , isDone: false}]
    }, {
      todoListTitle: 'Second List',
      id: Date.now()/ 3,
      todos: [{id: Date.now() / 9, todoText: 'Finist bs todo list' , isDone: false},{id: Date.now() / 10, todoText: 'Finist bs todo list' , isDone: true}]
    }]

  }

}
