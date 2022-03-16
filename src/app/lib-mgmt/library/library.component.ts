import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Book } from '../types/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  isFormVisible: boolean = false;
  isSuccess: boolean = false;
  newBook: Book = {}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onSave(): void {
    this.isSuccess = false;

    const { newBook } = this;
    const url = 'http://localhost:3002/books';
    this.http.post<Book>(url, newBook, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .pipe(
      catchError((err: HttpErrorResponse, caught) => {
        console.log(err);
        return throwError(() => new Error('Unable to post data to the server'))
      })
    )
    .subscribe((data: Book) => {
      this.isSuccess = true;
      this.newBook = {};
    });
  }

}
