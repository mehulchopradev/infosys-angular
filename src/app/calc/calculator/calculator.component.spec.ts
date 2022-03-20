import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CalcFormComponent } from '../calc-form/calc-form.component';
import { CalcResultsComponent } from '../calc-results/calc-results.component';
import { CalculatorService } from '../calculator.service';
import { CalcData } from '../types/calc_data';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let firstNo: HTMLInputElement;
  let secondNo: HTMLInputElement;
  let operation: HTMLSelectElement;
  let ans: HTMLInputElement;
  let calculate: HTMLButtonElement;
  let firstNoLabel: HTMLElement;
  let secondNoLabel: HTMLElement;
  let operationLabel: HTMLElement;
  let ansLabel: HTMLElement;

  beforeEach(async () => {
    const defaultCalcData: CalcData = {
      firstNo: 7,
      secondNo: 5,
      operation: '*',
      ans: 35,
    };

    // mocking the collaborator object (calculator service)
    const mockedCalculatorService = jasmine.createSpyObj('CalculatorService', ['fetchDefaultCalcData']);
    mockedCalculatorService.fetchDefaultCalcData.and.returnValue(defaultCalcData);

    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent, CalcFormComponent, CalcResultsComponent ],
      imports: [FormsModule, CommonModule],
      providers: [
        { provide: CalculatorService, useValue: mockedCalculatorService }
      ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CalculatorComponent);
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

    const firstNoLabelDe = fixture.debugElement.query(By.css('.firstNoLabel'));
    firstNoLabel = firstNoLabelDe.nativeElement;

    const secondNoLabelDe = fixture.debugElement.query(By.css('.secondNoLabel'));
    secondNoLabel = secondNoLabelDe.nativeElement;

    const operationLabelDe = fixture.debugElement.query(By.css('.operationLabel'));
    operationLabel = operationLabelDe.nativeElement;

    const ansLabelDe = fixture.debugElement.query(By.css('.ansLabel'));
    ansLabel = ansLabelDe.nativeElement;

    fixture.detectChanges();
  });

  it('should display the default calc data in calc form and calc results', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    expect(firstNo.value).toBe('7');
    expect(secondNo.value).toBe('5');
    expect(operation.value).toBe('*');
    expect(ans.value).toBe('35');

    expect(firstNoLabel.textContent).toBe('The first number entered by you: 7');
    expect(operationLabel.textContent).toBe('The operation selected by you: *');
    expect(secondNoLabel.textContent).toBe('The second number entered by you: 5');
    expect(ansLabel.textContent).toBe('The ans of the above operation: 35');
  }));

  it('performs the calculation and shows the results in calc results', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    firstNo.value = '6';
    firstNo.dispatchEvent(new Event('input'));

    secondNo.value = '5';
    secondNo.dispatchEvent(new Event('input'));

    operation.value = '*';
    operation.dispatchEvent(new Event('change'));

    calculate.click();

    fixture.detectChanges();

    expect(ans.value).toBe('30');

    expect(firstNoLabel.textContent).toBe('The first number entered by you: 6');
    expect(operationLabel.textContent).toBe('The operation selected by you: *');
    expect(secondNoLabel.textContent).toBe('The second number entered by you: 5');
    expect(ansLabel.textContent).toBe('The ans of the above operation: 30');
  }));
});
