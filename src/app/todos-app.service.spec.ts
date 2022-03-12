import { TestBed } from '@angular/core/testing';

import { TodosAppService } from './todos-app.service';

describe('TodosAppService', () => {
  let service: TodosAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
