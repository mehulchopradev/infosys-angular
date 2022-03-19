import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Book } from '../types/book';
import { titleValidator } from '../utils/title-validator';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookFormGroup!: FormGroup;

  isSuccess: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    // build a form group
      // controls
    this.bookFormGroup = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(10), titleValidator()]],
      price: [''],
      pages: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSave(): void {
    this.isSuccess = false;
    const data = this.bookFormGroup.value;

    const url = 'http://localhost:3002/books';
    this.http.post<Book>(url, data, {
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
      this.bookFormGroup.reset();
    });
  }

  onReset(): void {
    this.bookFormGroup.reset();
  }

  // getter properties for the FormControls in order to access them in the GUI
  get title() {
    return this.bookFormGroup.get('title');
  }

  get pages() {
    return this.bookFormGroup.get('pages');
  }
}
