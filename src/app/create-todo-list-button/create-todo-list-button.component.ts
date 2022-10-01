import { Component, OnInit } from '@angular/core';
import { CreateTodoService } from '../core/services/create-todo.service';

@Component({
  selector: 'milldrew-create-button',
  templateUrl: './create-todo-list-button.component.html',
  styleUrls: ['./create-todo-list-button.component.scss'],
  host: { class: 'fixed-bottom center-block' },
})
export class CreateTodoListButtonComponent implements OnInit {
  constructor(public createTodoService: CreateTodoService) {}

  ngOnInit(): void {}

  addTodo() {
    this.createTodoService.addTodoToTodoList('some text');
  }
}
