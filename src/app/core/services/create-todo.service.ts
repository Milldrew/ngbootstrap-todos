import { Injectable } from '@angular/core';
import { TodoListStateService } from './todo-list-state.service';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoService {
  constructor(public todoListStateService: TodoListStateService) {}

  addTodoToTodoList(todoText: string) {
    this.todoListStateService.currentTodoList.todos.push({
      id: Math.random(),
      todoText,
      isDone: false,
    });
    this.todoListStateService.currentTodoList = {
      ...this.todoListStateService.currentTodoList,
    };
  }
}
