import { TestBed } from '@angular/core/testing';

import { CreateTodoListService } from './create-todo-list.service';

describe('CreateTodoListService', () => {
  let service: CreateTodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
