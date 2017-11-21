import { Injectable } from '@angular/core';
import {ObservableArray} from 'wijmo/wijmo';

@Injectable()
export class DataSvcService {

  getData(count: number): ObservableArray {
    const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = new ObservableArray();
    for (let i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 === 0
      });
    }
    return data;
  }
}
