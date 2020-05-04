import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {IFilterAngularComp} from "@ag-grid-community/angular";
import {IFilterParams, RowNode, IDoesFilterPassParams, IAfterGuiAttachedParams} from "@ag-grid-community/core";

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css']
})
export class DropdownFilterComponent implements IFilterAngularComp {
  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  private selectableOptions: string[];

  @ViewChild('select', {static: false, read: ViewContainerRef}) public select;
  private type: string;

  agInit(params: IFilterParams): void {
    this.params = params;
    this.valueGetter = params.valueGetter;
    this.selectableOptions  = [''];
    let strings = [''];
    this.params.api.forEachNode(function(rowNode, index) {
      strings.push(rowNode.data.price.toString());
    });
    this.selectableOptions = strings;
  }

  public getSelectableOptions(): string[]{
    return this.selectableOptions;
  }

  isFilterActive(): boolean {
    return this.type !== null && this.type !== undefined && this.type !== '';
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    return this.type.toLowerCase()
        .split(" ")
        .every((filterWord) => {
          return this.valueGetter(params.node).toString().toLowerCase().indexOf(filterWord) >= 0;
        });
  }

  getModel(): any {
    return {value: this.type};
  }

  setModel(model: any): void {
    this.type = model ? model.value : '';
  }

  ngAfterViewInit(params: IAfterGuiAttachedParams): void {
    setTimeout(() => {
      //this.select.element.nativeElement.focus();
    })
  }

  // noinspection JSMethodCanBeStatic
  componentMethod(message: string): void {
    alert(`Alert from RecordTypeFilterComponent ${message}`);
  }

  onChange(newValue): void {
    if (this.type !== newValue) {
      this.type = newValue;
      this.params.filterChangedCallback();
    }
  }
}

