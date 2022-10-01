import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.milldrew-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  host: { class: 'checkbox' },
})
export class TodoComponent implements OnInit {
  @Input()
  isDone: boolean = false;
  @Input()
  todoText: string = 'Do foobar from lib';
  @Input()
  isDisabled: boolean = false;
  LEADING_WHITE_SPACE = '  ';

  constructor() {}

  ngOnInit(): void {}
}
