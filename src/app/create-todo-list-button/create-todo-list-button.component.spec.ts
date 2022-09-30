import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoListButtonComponent } from './create-todo-list-button.component';

describe('CreateTodoListButtonComponent', () => {
  let component: CreateTodoListButtonComponent;
  let fixture: ComponentFixture<CreateTodoListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTodoListButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
