import { TestBed } from '@angular/core/testing';

import { DeleteTodoListService } from './delete-todo-list.service';

describe('DeleteTodoListService', () => {
  let service: DeleteTodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteTodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
