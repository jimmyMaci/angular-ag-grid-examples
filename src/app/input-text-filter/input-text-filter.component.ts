import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {IDoesFilterPassParams, IFilterParams, RowNode,} from "@ag-grid-community/core";
import {AgFilterComponent} from "@ag-grid-community/angular";

@Component({
  selector: 'app-input-text-filter',
  templateUrl: './input-text-filter.component.html',
  styleUrls: ['./input-text-filter.component.css']
})
export class InputTextFilterComponent implements OnInit, AfterViewInit, AgFilterComponent {

  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  public text: string = '';
  @ViewChild('input', {static: false, read: ViewContainerRef }) public input;

  constructor() { }

  ngOnInit() {
  }

  agInit(params: IFilterParams): void {
    this.params = params;
    this.valueGetter = params.valueGetter;
    console.log(this.params);
  }

  isFilterActive(): boolean {
    return this.text !== null && this.text !== undefined && this.text !== '';
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    return this.text
      .toLowerCase()
      .split(' ')
      .every(filterWord => {
        return (
          this.valueGetter(params.node)
            .toString()
            .toLowerCase()
            .indexOf(filterWord) >= 0
        );
      });
  }

  getModel(): any {
    return { value: this.text };
  }

  setModel(model: any): void {
    this.text = model ? model.value : '';
  }

  ngAfterViewInit(): void {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  onChange(newValue): void {
    if (this.text !== newValue) {
      this.text = newValue;
      console.log(this.params);
      this.params.filterChangedCallback();
    }
  }

}
