import { Component, OnInit } from '@angular/core';
import { CreateTodoService } from '../core/services/create-todo.service';

@Component({
  selector: 'milldrew-create-todo-button',
  templateUrl: './create-todo-button.component.html',
  styleUrls: ['./create-todo-button.component.scss'],
  host: { class: 'fixed-bottom center-block' },
})
export class CreateTodoButtonComponent implements OnInit {
  constructor(public createTodoService: CreateTodoService) {}

  ngOnInit(): void {}

  addTodo() {
    this.createTodoService.addTodoToTodoList('some text');
  }
}
