import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './library/books/books.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LibraryComponent,
    BooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    LibraryComponent,
    BooksComponent,
    BookDetailsComponent,
  ]
})
export class LibMgmtModule { }
