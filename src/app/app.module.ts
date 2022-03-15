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
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosAppService } from './todos-app.service';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalcResultsComponent,
    CalcFormComponent,
    TodosComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonUtilitiesModule
  ],
  providers: [
    TodosAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
