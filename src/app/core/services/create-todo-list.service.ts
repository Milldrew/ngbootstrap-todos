import { Injectable } from '@angular/core';
import { TodoList } from '../types/todo-list.types';
import { TodoListStateService } from './todo-list-state.service';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoListService {
  constructor(public todoListStateService: TodoListStateService) {}
  addTodoList(title: string) {
    const newTodoList: TodoList = {
      id: this.createTodoListId(),
      todoListTitle: title,
      todos: [],
    };
    this.todoListStateService.todoLists.push(newTodoList);
  }

  createTodoListId() {
    return Date.now() + Math.random() * 100;
  }
}
