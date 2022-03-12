import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  newTodo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void {
    console.log(this.newTodo);
  }

}
