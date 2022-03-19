import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function titleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const reservedWords = ['admin', 'app'];
    const found = reservedWords.includes(control.value);
    return found ? { invalidTitle: { value: control.value } } : null;
    // return null if no validation error
    // `invalidTitle` is the validation error key
  }
}