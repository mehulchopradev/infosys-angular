import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // build a form group
      // controls
    this.bookFormGroup = this.fb.group({
      title: [''],
      price: [''],
      pages: ['']
    });
  }

}
