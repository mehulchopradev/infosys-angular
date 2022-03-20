import { Injectable } from '@angular/core';
import { CalcData } from './types/calc_data';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  async fetchDefaultCalcData() {
    const url: string = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error in connecting with the server. Please try again later');
    }

    const data: CalcData = await response.json();
    return data;
  }
}
