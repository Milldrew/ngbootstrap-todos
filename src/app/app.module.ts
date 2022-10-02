import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoComponent, TodoListModule } from 'ngx-m-bootstrap';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoListButtonComponent } from './create-todo-list-button/create-todo-list-button.component';
import { ListOfTodoListsComponent } from './list-of-todo-lists/list-of-todo-lists.component';
TodoComponent;
export function HttpLoaderFactor(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CreateTodoListButtonComponent,
    ListOfTodoListsComponent,
  ],
  imports: [
    TabsModule,
    TodoListModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactor,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
