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

  onCalculate() {
    const { firstNo, secondNo, operation } = this;
    
    let ans!: number; // ! to ensure that typescript does not complain at line 34
    switch(operation) {
      case '+': ans = parseInt(firstNo) + parseInt(secondNo);
        break;
      case '-': ans = parseInt(firstNo) - parseInt(secondNo);
        break;
      case '*': ans = parseInt(firstNo) * parseInt(secondNo);
        break;
    }

    this.ans = '' + ans;
  }

}
