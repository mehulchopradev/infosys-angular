import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosAppService } from './todos-app.service';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';
import { CalcModule } from './calc/calc.module';
import { LibMgmtModule } from './lib-mgmt/lib-mgmt.module';
import { UserMgmtModule } from './user-mgmt/user-mgmt.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonUtilitiesModule,
    CalcModule,
    LibMgmtModule,
    UserMgmtModule
  ],
  providers: [
    TodosAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
