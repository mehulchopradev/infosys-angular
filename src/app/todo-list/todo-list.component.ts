import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/todo';
import moment from 'moment';

const TODOS: Todo[] = [
  /* { id: 1, title: 'GOING TO TRECKING', done: true, createdDate: moment().subtract(3, 'd').toDate()},
  { id: 2, title: 'gym', done: false, createdDate: moment().subtract(1, 'd').toDate() },
  { id: 3, title: 'pRogram', done: true, createdDate: moment().toDate()}, */
]

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = TODOS;

  constructor() { }

  ngOnInit(): void {
  }

}
