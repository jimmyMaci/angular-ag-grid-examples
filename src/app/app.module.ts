import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { AgGridSimpleComponent } from './ag-grid-simple/ag-grid-simple.component';
import {AgGridModule} from "ag-grid-angular";

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
      AgGridSimpleComponent
    ]),
  ],
  declarations: [ 
    AppComponent, AgGridSimpleComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
