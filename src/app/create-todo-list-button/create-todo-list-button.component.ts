import { Component, OnInit } from '@angular/core';
import { CreateTodoService } from '../core/services/create-todo.service';
import { LocalForageService } from '../core/services/local-forage.service';

@Component({
  selector: 'milldrew-create-button',
  templateUrl: './create-todo-list-button.component.html',
  styleUrls: ['./create-todo-list-button.component.scss'],
  host: { class: 'fixed-bottom center-block' },
})
export class CreateTodoListButtonComponent implements OnInit {
  constructor(
    public createTodoService: CreateTodoService,
    public localForage: LocalForageService
  ) {}

  ngOnInit(): void {}

  addTodo() {
    this.createTodoService.addTodoToTodoList('some text');
    this.localForage
      .setItem('hi', 'hi from component')
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}
