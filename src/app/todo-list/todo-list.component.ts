import { Component, OnInit } from '@angular/core';
import { TodosAppService } from '../todos-app.service';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public service: TodosAppService) {}

  ngOnInit(): void {
  }

  get completedTodos() {
    /* return this.service.getTodos().filter(function (todo: Todo) {
      return todo.done;
    }); */

    return this.service.getTodos().filter((todo: Todo) => todo.done);

    /* const ct = [];
    for (const todo of todos) {
      if (todo.done) {
        ct.push(todo);
      }
    }

    return ct; */
  }

  onClearCompletedTodos(): void {
    const completedTodos = this.completedTodos;
    this.service.removeTodos(completedTodos);
  }

}
