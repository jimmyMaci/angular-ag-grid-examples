import { Component } from '@angular/core';
import {
  IFloatingFilter,
  IFloatingFilterParams,
  TextFilter,
  TextFilterModel,
} from "@ag-grid-community/core";
import { AgFrameworkComponent }  from "@ag-grid-community/angular";

export interface InputTextFloatingFilterParams extends IFloatingFilterParams {
  value: string;
}

@Component({
  selector: 'app-input-text-floating-filter',
  templateUrl: './input-text-floating-filter.component.html',
  styleUrls: ['./input-text-floating-filter.component.css']
})
export class InputTextFloatingFilterComponent implements IFloatingFilter, AgFrameworkComponent<InputTextFloatingFilterParams> {
  private params: InputTextFloatingFilterParams;

  public currentValue: string;

  agInit(params: InputTextFloatingFilterParams): void {
    this.params = params;
    this.currentValue = '';
  }

  onChange(event) {
    let valueToUse = this.currentValue === null ? '' : this.currentValue;
    this.params.parentFilterInstance(function(instance) {
      (<TextFilter>instance).onFloatingFilterChanged(
        'contains',
        valueToUse
      );
    });
  }

  onParentModelChanged(parentModel: TextFilterModel): void {
    if (!parentModel) {
      this.currentValue = '';
    } else {
      this.currentValue = parentModel.filter;
    }
  }

}
