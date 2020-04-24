import { Component } from '@angular/core';
import {
  FilterChangedEvent,
  IFloatingFilter,
  IFloatingFilterParams, TextFilter
} from "@ag-grid-community/core";
import { AgFrameworkComponent }  from "@ag-grid-community/angular";

export interface InputTextFloatingFilterParams extends IFloatingFilterParams {
  value: string;
}

@Component({
  selector: 'app-input-radio-floating-filter',
  templateUrl: './input-radio-floating-filter.component.html',
  styleUrls: ['./input-radio-floating-filter.component.css']
})
export class InputRadioFloatingFilterComponent  implements IFloatingFilter, AgFrameworkComponent<InputTextFloatingFilterParams> {
  private params: InputTextFloatingFilterParams;
  public currentValue: string;
  constructor() { }


  agInit(params: InputTextFloatingFilterParams): void {
    this.params = params;
    this.currentValue = null;
  }

  onRadioChange() {
    let valueToUse = this.currentValue;
    this.params.parentFilterInstance(function(instance) {
      (<TextFilter>instance).onFloatingFilterChanged(
          'equals',
          valueToUse
      );
    });
  }

  onParentModelChanged(parentModel: any, filterChangedEvent?: FilterChangedEvent): void {
    if (!parentModel) {
      this.currentValue = null;
    } else {
      this.currentValue = parentModel.filter;
    }
  }
}
