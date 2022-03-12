import { Injectable } from '@angular/core';
import { Todo } from './types/todo';
import moment from 'moment';

const TODOS: Todo[] = [
  { id: 1, title: 'GOING TO TRECKING', done: true, createdDate: moment().subtract(3, 'd').toDate()},
  { id: 2, title: 'gym', done: false, createdDate: moment().subtract(1, 'd').toDate() },
  { id: 3, title: 'pRogram', done: true, createdDate: moment().toDate()},
]

@Injectable({
  providedIn: 'root'
})
export class TodosAppService {

  todos: Todo[] = TODOS;

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(newTodo: string) {
    this.todos.push({
      id: this.todos.length + 1,
      title: newTodo,
      createdDate: new Date(),
      done: false,
    })
  }
}
