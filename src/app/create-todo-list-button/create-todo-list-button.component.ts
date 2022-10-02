import { Component, OnInit } from '@angular/core';
import { CreateTodoListService } from '../core/services/create-todo-list.service';
import { LocalForageService } from '../core/services/local-forage.service';

@Component({
  selector: 'milldrew-create-todo-list-button',
  templateUrl: './create-todo-list-button.component.html',
  styleUrls: ['./create-todo-list-button.component.scss'],
  host: { class: 'fixed-bottom center-block' },
})
export class CreateTodoListButtonComponent implements OnInit {
  constructor(
    public createTodoListService: CreateTodoListService,
    public localForage: LocalForageService
  ) {}

  ngOnInit(): void {}

  addTodoList() {
    this.createTodoListService.addTodoList('some text');
    this.localForage
      .setItem('add todo list', 'hi from add-todo-list')
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}
