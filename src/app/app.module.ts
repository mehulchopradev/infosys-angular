import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TitlePipe } from './title.pipe';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosAppService } from './todos-app.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalcResultsComponent,
    CalcFormComponent,
    TodosComponent,
    TodoListComponent,
    TitlePipe,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TodosAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
