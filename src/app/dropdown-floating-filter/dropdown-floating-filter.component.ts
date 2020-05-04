import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {
  IFloatingFilter,
  IFloatingFilterParams,
  TextFilter,
  TextFilterModel,
  FilterChangedEvent, RowNode,
} from "@ag-grid-community/core";
import { AgFrameworkComponent }  from "@ag-grid-community/angular";
import {InputTextFloatingFilterParams} from "../input-text-floating-filter/input-text-floating-filter.component";

export interface DropdownFloatingFilterParams extends IFloatingFilterParams {
  inputId: string;
  values: string[];
}


@Component({
  selector: 'app-dropdown-floating-filter',
  templateUrl: './dropdown-floating-filter.component.html',
  styleUrls: ['./dropdown-floating-filter.component.css']
})
export class DropdownFloatingFilterComponent implements IFloatingFilter, AgFrameworkComponent<DropdownFloatingFilterParams> {

  private inputId: string;
  private params: DropdownFloatingFilterParams;
  private selectableOptions: string[];

  @ViewChild('select', {static: false, read: ViewContainerRef}) public select;
  private type: string;

  agInit(params: DropdownFloatingFilterParams): void {
    this.params = params;
    this.inputId = params.inputId;
    this.selectableOptions = params.values;
    this.selectableOptions  = [''];
    let strings = [''];
    this.params.parentFilterInstance((filterInstance => {

      let model =filterInstance.getModel()
      console.log(model)
    }))
    this.params.api.forEachNode(function(rowNode, index) {
      strings.push(rowNode.data.price.toString());
    });
    this.selectableOptions = strings;
  }

  onChange(event) {
    let valueToUse = this.type === null ? '' : this.type;
    this.params.parentFilterInstance(function(instance) {
      (<TextFilter>instance).onFloatingFilterChanged(
          'equals',
          valueToUse
      );
    });
  }

  onParentModelChanged(parentModel: any, filterChangedEvent?: FilterChangedEvent): void {
    if (!parentModel) {
      this.type = '';
    } else {
      this.type = parentModel.filter;
    }
  }

}
