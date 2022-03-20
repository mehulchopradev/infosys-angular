import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { CalcData } from '../types/calc_data';

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
  defaultData: CalcData | null = null;

  constructor(private calculatorService: CalculatorService) { }


  // async - await (asynchronous code in a synchronous fashion)
  async ngOnInit() {
      // asynchronous code
      // synchronous fashion
      console.log('ngOnInit calculator comp');

      try {
        const data = await this.calculatorService.fetchDefaultCalcData();
        this.defaultData = data;
        console.log('calculator comp', this.defaultData);
      } catch (err) {
        console.log(err);
        alert('Unable to fetch the calc data right now!');
      }
  }

  /* ngOnInit(): void {
    // synchronous code

    //  called only once
    // ??? ajax call for the data to project backend
    const url: string = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

    // asynchronous (network IO) XHR (Ajax)
    fetch(url)
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Error in fetching default calc data');
      })
      .then((data: any) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        alert('Unable to fetch the calc data right now!');
      });

    // synchronous code
    // console.log('hello'); // synchronous
    // console.log('good morning'); // synchronous
    
    /* const promise: Promise<any> = fetch(url); // asynchronous call (network IO)
    promise.then((response: Response) => {
      // server responded back with a Response
      const jsonPromise: Promise<any> = response.json(); // asynchronous call (network IO)
      jsonPromise.then((data: any) => {
        console.log(data);
      });
      console.log('good evening'); // synchronous
      console.log('good night'); // synchronous
    });
  
    console.log('hello'); // synchronous
    console.log('good morning'); // synchronous */
  /*} */

  onCalculate(data: any) {
    // synchronous code
    const { firstNo, secondNo, operation, ans } = data;
    this.firstNo = firstNo;
    this.secondNo = secondNo;
    this.operation = operation;
    this.ans = ans;
  }
}
