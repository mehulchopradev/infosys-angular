import { Component, OnInit } from '@angular/core';
import { TodosAppService } from '../todos-app.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  newTodo: string = '';

  constructor(public service: TodosAppService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.service.addTodo(this.newTodo);
    this.newTodo = '';
  }

}
