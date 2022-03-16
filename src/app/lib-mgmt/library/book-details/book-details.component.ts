import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // object attribute (route, http)

  book: Book | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { bookId } = params;
      const url = `http://localhost:3002/books/${bookId}`;
      this.http.get<Book>(url)
        .pipe(
          catchError((err: HttpErrorResponse, caught: any) => {
            console.log(err);
            alert('Unable to get the details of the book');
            return throwError(() => new Error('Unable to get the details of the book'))
          })
        )
        .subscribe((data: Book) => {
          this.book = data;
        });
    });
  }

}
