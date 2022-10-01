import { Todo, TodoList } from '../core/types/todo-list.types';
import { Component, Input, OnInit } from '@angular/core';
import { TodoListStateService } from '../core/services/todo-list-state.service';
import { CreateTodoService } from '../core/services/create-todo.service';

@Component({
  selector: 'milldrew-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  host: { class: 'card' },
})
export class TodoListComponent implements OnInit {
  todos: Todo[] | undefined;
  @Input()
  title: string = 'Todo List Title Placeholder';

  todoListData: TodoList;
  constructor(
    private createTodoService: CreateTodoService,
    private todoListStateService: TodoListStateService
  ) {
    this.todoListData = this.todoListStateService.todoLists[0];
  }
  ngDoCheck() {
    this.todoListData = this.todoListStateService.currentTodoList;
    console.log(this.todoListData.todos);
  }

  ngOnInit(): void {}
}
