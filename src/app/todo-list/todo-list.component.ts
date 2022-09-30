import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'milldrew-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input()
  title: string = 'Todo List Title Placeholder';

  constructor() {}

  ngOnInit(): void {}
}
