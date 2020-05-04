import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {IFilterAngularComp} from "@ag-grid-community/angular";
import {IFilterParams, RowNode, IDoesFilterPassParams, IAfterGuiAttachedParams} from "@ag-grid-community/core";

@Component({
  selector: 'app-includes-match-filter',
  templateUrl: './includes-match-filter.component.html',
  styleUrls: ['./includes-match-filter.component.css']
})
export class IncludesMatchFilterComponent implements IFilterAngularComp {
  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  public text: string = '';

  @ViewChild('input', {static: false, read: ViewContainerRef}) public input;

  agInit(params: IFilterParams): void {
    this.params = params;
    this.valueGetter = params.valueGetter;
  }

  isFilterActive(): boolean {
    return this.text !== null && this.text !== undefined && this.text !== '';
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    return this.text.toLowerCase()
        .split(" ")
        .every((filterWord) => {
          return this.valueGetter(params.node).toString().toLowerCase().indexOf(filterWord) >= 0;
        });
  }

  getModel(): any {
    return {value: this.text};
  }

  setModel(model: any): void {
    this.text = model ? model.value : '';
  }

  ngAfterViewInit(params: IAfterGuiAttachedParams): void {
    setTimeout(() => {
      this.input.element.nativeElement.focus();
    })
  }

  // noinspection JSMethodCanBeStatic
  componentMethod(message: string): void {
    alert(`Alert from PartialMatchFilterComponent ${message}`);
  }

  onChange(newValue): void {
    if (this.text !== newValue) {
      this.text = newValue;
      this.params.filterChangedCallback();
    }
  }
}
