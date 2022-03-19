import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calc/calculator/calculator.component';
import { BookDetailsComponent } from './lib-mgmt/library/book-details/book-details.component';
import { BooksComponent } from './lib-mgmt/library/books/books.component';
import { LibraryComponent } from './lib-mgmt/library/library.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './user-mgmt/users/users.component';

const routes: Routes = [
  { path: 'calc', component: CalculatorComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'library', component: LibraryComponent, children: [
    { path: 'books', component: BooksComponent },
    { path: 'book-details/:bookId', component: BookDetailsComponent }
  ]},
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
