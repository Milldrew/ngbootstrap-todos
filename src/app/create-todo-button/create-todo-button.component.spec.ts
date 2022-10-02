import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoButtonComponent } from './create-todo-button.component';

describe('CreateTodoButtonComponent', () => {
  let component: CreateTodoButtonComponent;
  let fixture: ComponentFixture<CreateTodoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTodoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
