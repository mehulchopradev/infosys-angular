import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { titleValidator } from '../utils/title-validator';

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
      title: ['', [Validators.required, Validators.maxLength(10), titleValidator()]],
      price: [''],
      pages: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSave(): void {
    const data = this.bookFormGroup.value;
    // console.log(data);
    // TODO: POST api call to create a new book
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
