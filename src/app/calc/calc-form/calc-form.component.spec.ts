import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CalcFormComponent } from './calc-form.component';

describe('CalcFormComponent', () => {
  let component: CalcFormComponent;
  let fixture: ComponentFixture<CalcFormComponent>;
  let firstNo: HTMLInputElement;
  let secondNo: HTMLInputElement;
  let operation: HTMLSelectElement;
  let ans: HTMLInputElement;
  let calculate: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcFormComponent ],
      imports: [
        FormsModule,
        CommonModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFormComponent);
    component = fixture.componentInstance;

    const firstNoDe = fixture.debugElement.query(By.css('.firstNo'));
    firstNo = firstNoDe.nativeElement;

    const secondNoDe = fixture.debugElement.query(By.css('.secondNo'));
    secondNo = secondNoDe.nativeElement;

    const operationDe = fixture.debugElement.query(By.css('.operation'));
    operation = operationDe.nativeElement;

    const ansDe = fixture.debugElement.query(By.css('.ans'));
    ans = ansDe.nativeElement;

    const calculateDe = fixture.debugElement.query(By.css('.calculate'));
    calculate = calculateDe.nativeElement;

    fixture.detectChanges();
  });

  it('should calculate subtraction', () => {
    firstNo.value = '6';
    firstNo.dispatchEvent(new Event('input'));

    secondNo.value = '5';
    secondNo.dispatchEvent(new Event('input'));

    operation.value = '-';
    operation.dispatchEvent(new Event('change'));

    calculate.click();

    fixture.detectChanges();

    expect(ans.value).toBe('1');
  });

  it('should calculate multiplication', () => {
    firstNo.value = '6';
    firstNo.dispatchEvent(new Event('input'));

    secondNo.value = '5';
    secondNo.dispatchEvent(new Event('input'));

    operation.value = '*';
    operation.dispatchEvent(new Event('change'));

    calculate.click();

    fixture.detectChanges();

    expect(ans.value).toBe('30');
  });
});
