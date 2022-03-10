import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc-results',
  templateUrl: './calc-results.component.html',
  styleUrls: ['./calc-results.component.scss']
})
export class CalcResultsComponent implements OnInit {

  // state
  @Input()
  first: string = '';
  
  @Input()
  second: string = '';

  @Input()
  ops: string = '';

  @Input()
  ans: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
