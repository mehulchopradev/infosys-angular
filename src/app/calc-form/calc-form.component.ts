import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CalcData } from '../types/calc_data';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss']
})
export class CalcFormComponent implements OnInit, OnChanges {

  // state
  firstNo: string = '';
  secondNo: string = '';
  operation: string = '';
  ans: string = '';

  @Input()
  defaultData: CalcData | null = null;

  @Output()
  calc: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // called only once
    console.log('ngOnInit calc-form', this.defaultData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // called whenever the @Input properties changes after the component has been rendered
    if (changes['defaultData'] && changes['defaultData'].previousValue != changes['defaultData'].currentValue) {
      // there is a change!
      const calcData: CalcData = changes['defaultData'].currentValue;
      this.firstNo = calcData.firstNo + '';
      this.secondNo = calcData.secondNo + '';
      this.operation = calcData.operation;
      this.ans = calcData.ans + '';

      this.calc.emit({
        firstNo: this.firstNo,
        secondNo: this.secondNo,
        operation: this.operation,
        ans: this.ans,
      });
    }
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
