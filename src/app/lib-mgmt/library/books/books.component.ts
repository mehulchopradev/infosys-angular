import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Book } from '../../types/book';

const url = 'http://localhost:3002/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  // object attribute (http)

  books: Book[] = [];
  isError: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Book[]>(url)
      .pipe(catchError((err, caught) => {
        console.log(err);
        this.isError = true;
        return throwError(() => new Error('Unable to connect. Please try again later'));
      }))
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

}
