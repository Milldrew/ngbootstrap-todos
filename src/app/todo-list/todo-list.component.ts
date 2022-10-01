import { Todo } from '../core/types/todo-list.types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'milldrew-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  host: { class: 'card' },
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  @Input()
  title: string = 'Todo List Title Placeholder';

  constructor() {
    this.todos = [
      {
        id: Math.random(),
        todoText: "Something I haven't done",
        isDone: false,
      },
      {
        id: Math.random(),
        todoText: 'Something i have done',
        isDone: true,
      },
      {
        id: Math.random(),
        todoText:
          'Something i have done that has a lot of text and might create a line break of stretch the parent elements width',
        isDone: true,
      },
    ];
  }

  ngOnInit(): void {}
}
