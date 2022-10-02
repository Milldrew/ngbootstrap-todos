import { LocalForageService } from './core/services/local-forage.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TodoListStateService } from './core/services/todo-list-state.service';
import { TodoList } from './core/types/todo-list.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngbootstrap-todos';
  constructor(
    translate: TranslateService,
    public todoListStateService: TodoListStateService
  ) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
