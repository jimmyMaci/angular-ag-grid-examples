import { Component, OnInit } from '@angular/core';
import {GridApi, GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-ag-grid-simple',
  templateUrl: './ag-grid-simple.component.html',
  styleUrls: ['./ag-grid-simple.component.css']
})
export class AgGridSimpleComponent implements OnInit {

  gridOptions: GridOptions;
  gridApi: GridApi;
  columnDefs;
  defaultColDef;
  context;
  rowData;
  constructor() { }

  ngOnInit() {
    this.context = { componentParent: this };
    this.gridOptions = {
      rowHeight: 30
    };
    this.defaultColDef = {
      editable: true,
      sortable: true,
      minWidth: 80,
      filter: true,
    };
    this.columnDefs = [
      {field: 'make' },
      {field: 'model' },
      {field: 'price'}
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridOptions.api =this.gridApi;
    this.gridApi.sizeColumnsToFit();
  }

  onRowClicked(event): void {
    console.log("row have been clicked. Model is "+event.data.model)
  }
}
