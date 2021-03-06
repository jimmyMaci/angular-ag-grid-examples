import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { AgGridSimpleComponent } from './ag-grid-simple/ag-grid-simple.component';
import {AgGridModule} from "ag-grid-angular";
import { InputTextFloatingFilterComponent } from './input-text-floating-filter/input-text-floating-filter.component';
import { InputTextFilterComponent } from './input-text-filter/input-text-filter.component';
import { InputNumberFloatingFilterComponent } from './input-number-floating-filter/input-number-floating-filter.component';
import { InputRadioFloatingFilterComponent } from './input-radio-floating-filter/input-radio-floating-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/grid', pathMatch: "full"},
      // { path: '', component: AppComponent },
      {path: 'grid', component: AgGridSimpleComponent},
    ]),
    AgGridModule.withComponents([
      AgGridSimpleComponent,
      InputTextFloatingFilterComponent,
      InputTextFilterComponent,
      InputNumberFloatingFilterComponent,
      InputRadioFloatingFilterComponent
    ]),
  ],
  declarations: [ 
    AppComponent,
    AgGridSimpleComponent,
    InputTextFloatingFilterComponent,
    InputTextFilterComponent,
    InputNumberFloatingFilterComponent,
    InputRadioFloatingFilterComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
