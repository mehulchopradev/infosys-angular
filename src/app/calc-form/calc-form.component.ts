import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss']
})
export class CalcFormComponent implements OnInit {

  // state
  firstNo: string = '';
  secondNo: string = '';
  operation: string = '';
  ans: string = '';

  @Output()
  calc: EventEmitter<any> = new EventEmitter();

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

    // inform the parent component about the data
    this.calc.emit({
      firstNo,
      secondNo,
      operation,
      ans: this.ans,
    });
  }

}
