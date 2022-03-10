import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  // state
  firstNo: string = '';
  secondNo: string = '';
  operation: string = '';
  ans: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCalculate(data: any) {
    const { firstNo, secondNo, operation, ans } = data;
    this.firstNo = firstNo;
    this.secondNo = secondNo;
    this.operation = operation;
    this.ans = ans;
  }
}
