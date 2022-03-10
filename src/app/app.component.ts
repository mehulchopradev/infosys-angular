import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // state
  firstName: string = 'john';
  lastName: string = 'doe';

  /* onFirstNameChange(firstName: string): void {
    this.firstName = firstName;
  }

  onLastNameChange(lastName: string): void {
    this.lastName = lastName;
  } */
}
