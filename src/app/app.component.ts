import {Component, ElementRef} from '@angular/core';
import {DataSvcService} from './data-svc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private  data1 = [{id: 1, country : 'usa', sales: 10, salesDiff: 'asd', expenses: 'a', expensesDiff: '1'},
    {id: 2, country : 'usa', sales: 10, salesDiff: 'asd', expenses: 'a', expensesDiff: '1'}];
  private  data: any;

  constructor(private dataSvcService: DataSvcService, private el: ElementRef) {
    this.data = this.dataSvcService.getData(11);
    // const gridDefault = new WjGridModule();
    // gridDefault.constructor({
    //   isReadOnly: true,
    //   allowResizing: 'None',
    //   allowDragging: 'None',
    //   allowSorting: false,
    //   selectionMode: 'RowRange',
    //   showAlternatingRows: false,
    //   autoGenerateColumns: false,
    //   columns: [
    //     // { binding: 'id', header: 'ID', width: 50 },
    //     // { binding: 'country', header: 'Country' },
    //     // { binding: 'sales', header: 'Sales', width: 80, format: 'n0' },
    //     // { binding: 'salesDiff', header: 'Diff', dataType: 'Number', width: 80, format: 'p0' },
    //     // { binding: 'expenses', header: 'Expenses', width: 80, format: 'n0' },
    //     // { binding: 'expensesDiff', header: 'Diff', dataType: 'Number', width: 80, format: 'p0' }
    //   ],
    //   itemsSource: this.data,
    // });

  }
  show() {
    console.log(this.data);
    console.log(this.el.nativeElement.querySelector('a'));
  }
}
