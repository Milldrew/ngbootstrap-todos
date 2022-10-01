import { Injectable } from '@angular/core';
import { TodoList } from '../types/todo-list.types';

@Injectable({
  providedIn: 'root',
})
export class TodoListStateService {
  todoLists: TodoList[];
  currentTodoList: TodoList = {
    todoListTitle: 'First List',
    id: Date.now(),
    todos: [
      {
        id: Date.now() / 10,
        todoText: 'Finist bs todo list',
        isDone: false,
      },
      {
        id: Date.now() / 10,
        todoText: 'Finist bs todo list',
        isDone: false,
      },
    ],
  };

  constructor() {
    this.todoLists = [
      {
        todoListTitle: 'First List',
        id: Date.now(),
        todos: [
          {
            id: Date.now() / 10,
            todoText: 'Finist bs todo list',
            isDone: false,
          },
          {
            id: Date.now() / 10,
            todoText: 'Finist bs todo list',
            isDone: false,
          },
        ],
      },
    ];
  }
}
