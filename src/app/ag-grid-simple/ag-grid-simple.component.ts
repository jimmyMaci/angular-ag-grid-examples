import {Component, OnInit} from '@angular/core';
import {GridApi, GridOptions} from "@ag-grid-community/all-modules";
import {InputRadioFloatingFilterComponent} from "../input-radio-floating-filter/input-radio-floating-filter.component";

import {Module} from "@ag-grid-community/core";
import {AllModules} from "@ag-grid-enterprise/all-modules";

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
    frameworkComponents;
    modules: Module[] = AllModules;

    constructor() {
    }

    ngOnInit() {
        this.context = {componentParent: this};
        this.gridOptions = {
            rowHeight: 30,
            floatingFilter: true,
        };
        this.defaultColDef = {
            editable: true,
            sortable: true,
            minWidth: 80,
            filter: true,
        };
        this.columnDefs = [
            {
                headerName: 'Make',
                field: 'make',
                filter: 'agTextColumnFilter',
                floatingFilterComponent: 'radioFloatingFilter',
                floatingFilterComponentParams: {
                    maxValue: 1,
                    suppressFilterButton: true,
                    suppressMiniFilter: false
                },
                rowSelection: 'single',
                suppressMenu: false,
                width: 300,
            },
            {field: 'model'},
            {field: 'price'}
        ];

        this.rowData = [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
        ];
      this.frameworkComponents = {radioFloatingFilter: InputRadioFloatingFilterComponent};
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridOptions.api = this.gridApi;
        this.gridApi.sizeColumnsToFit();
    }

    onRowClicked(event): void {
        console.log("row have been clicked. Model is " + event.data.model)
    }
}
