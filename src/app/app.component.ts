import { Component, ElementRef } from '@angular/core';
import { DataSvcService } from './data-svc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private data1 = [
    { id: 1, country: 'usa', sales: 10, salesDiff: 'asd', expenses: 'a', expensesDiff: '1' },
    { id: 2, country: 'usa', sales: 10, salesDiff: 'asd', expenses: 'a', expensesDiff: '1' }];
  private data: any;

  constructor(private dataSvcService: DataSvcService, private el: ElementRef) {
    this.data = this.dataSvcService.getData(11);
  }
  showData() {
    console.log(this.data);
  }
}
