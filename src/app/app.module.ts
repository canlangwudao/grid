import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {DataSvcService} from './data-svc.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjGridModule
  ],
  providers: [DataSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
