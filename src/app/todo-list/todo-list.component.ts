import { Component, OnInit } from '@angular/core';
import { TodosAppService } from '../todos-app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public service: TodosAppService) {}

  ngOnInit(): void {
  }

}
