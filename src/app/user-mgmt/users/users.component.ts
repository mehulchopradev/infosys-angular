import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../types/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      username: [''],
      password: [''],
      address: this.fb.group({ // nested form groups
        country: [''],
        state: [''],
        postalCode: ['']
      }),
      contactNos: this.fb.array([]),
    });
  }

  onSave() {
    const data: User = this.userFormGroup.value as User;
    debugger;
  }

  get contactNos(): FormArray {
    return this.userFormGroup.get('contactNos') as FormArray;
  }

  onAdd(): void {
    this.contactNos.push(this.fb.control(''));
  }

  onDelete(index: number): void {
    this.contactNos.removeAt(index);
  }
}
