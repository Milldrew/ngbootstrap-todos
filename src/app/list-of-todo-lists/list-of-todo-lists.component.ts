import { Component, Input, OnInit } from '@angular/core';
import { TodoListStateService } from '../core/services/todo-list-state.service';
import { TodoList } from '../core/types/todo-list.types';

@Component({
  selector: '.milldrew-list-lists',
  templateUrl: './list-of-todo-lists.component.html',
  styleUrls: ['./list-of-todo-lists.component.scss'],
})
export class ListOfTodoListsComponent implements OnInit {
  @Input()
  todoListsData: TodoList[];
  constructor(public todoListStateService: TodoListStateService) {
    this.todoListsData = todoListStateService.todoLists;
  }

  ngOnInit(): void {}
}
