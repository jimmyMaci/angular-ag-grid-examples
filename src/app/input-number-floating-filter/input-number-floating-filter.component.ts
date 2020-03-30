import { Component } from '@angular/core';
import {
  IFloatingFilter,
  IFloatingFilterParams,
  NumberFilter,
  NumberFilterModel
} from "ag-grid-community";
import { AgFrameworkComponent }  from "ag-grid-angular";

export interface InputNumberFloatingFilterParams extends IFloatingFilterParams {
  value: number;
}

@Component({
  selector: 'app-input-number-floating-filter',
  templateUrl: './input-number-floating-filter.component.html',
  styleUrls: ['./input-number-floating-filter.component.css']
})
export class InputNumberFloatingFilterComponent  implements IFloatingFilter, AgFrameworkComponent<InputNumberFloatingFilterParams> {

  private params: InputNumberFloatingFilterParams;
  public currentValue: number;

  agInit(params: InputNumberFloatingFilterParams): void {
    this.params = params;
    this.currentValue = null;
  }

  valueChanged() {
    let valueToUse = this.currentValue === 0 ? null : this.currentValue;
    this.params.parentFilterInstance(function(instance) {
      (<NumberFilter>instance).onFloatingFilterChanged(
        'greaterThan',
        valueToUse
      );
    });
  }

  onParentModelChanged(parentModel: NumberFilterModel): void {
    if (!parentModel) {
      this.currentValue = null;
    } else {
      this.currentValue = parentModel.filter;
    }
  }

}
