import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoListService {
  constructor() {}
  addTodoList(title: string) {
    console.log(title);
  }
}
