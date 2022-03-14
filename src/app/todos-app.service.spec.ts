import { TestBed } from '@angular/core/testing';

import { TodosAppService } from './todos-app.service';

describe('TodosAppService', () => {
  let service: TodosAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosAppService);
  });

  it('adds the todos properly', () => {
    service.addTodo('todo 1');
    service.addTodo('todo 2');

    const todos = service.todos;
    expect(todos.length).toBe(2);

    const todo1 = todos[0];
    expect(todo1.id).toBe(1);
    expect(todo1.title).toBe('todo 1');
    expect(todo1.done).toBeFalse();

    const todo2 = todos[1];
    expect(todo2.id).toBe(2);
    expect(todo2.title).toBe('todo 2');
    expect(todo2.done).toBeFalse();
  });

  it('removes the todos properly', () => {
    service.addTodo('todo 1');
    service.addTodo('todo 2');
    service.addTodo('todo 3');
    service.addTodo('todo 4');

    const todos = service.todos;

    service.removeTodos([todos[0], todos[2]]);
    let updatedTodos = service.todos;

    expect(updatedTodos.length).toBe(2);
    expect(updatedTodos[0].title).toBe('todo 2');
    expect(updatedTodos[1].title).toBe('todo 4');

    service.addTodo('todo 5');
    updatedTodos = service.todos;
    expect(updatedTodos[2].id).toBe(5);
  });  
});
