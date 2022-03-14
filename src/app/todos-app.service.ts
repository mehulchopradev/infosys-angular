import { Injectable } from '@angular/core';
import { Todo } from './types/todo';
import moment from 'moment';

/* const TODOS: Todo[] = [
  { id: 1, title: 'GOING TO TRECKING', done: true, createdDate: moment().subtract(3, 'd').toDate()},
  { id: 2, title: 'gym', done: false, createdDate: moment().subtract(1, 'd').toDate() },
  { id: 3, title: 'pRogram', done: true, createdDate: moment().toDate()},
] */

@Injectable({
  providedIn: 'root'
})
export class TodosAppService {

  todos: Todo[] = [];

  lastTodoId: number = 0;

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(newTodo: string) {
    this.todos.push({
      id: ++this.lastTodoId,
      title: newTodo,
      createdDate: new Date(),
      done: false,
    })
  }

  removeTodos(todos: Todo[]) {
    const ids: number[] = todos.map((todo: Todo) => todo.id);
    this.todos = this.todos.filter((todo: Todo) => !ids.includes(todo.id));
  }
}
