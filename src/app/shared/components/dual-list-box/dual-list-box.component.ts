import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IItemsMovedEvent } from '../../models/items-moved-event';
import { ListBoxOption } from '../../models/list-box-option';
import * as lodash from 'lodash';

@Component({
  selector: 'dual-list-box',
  templateUrl: './dual-list-box.component.html',
  styleUrls: ['./dual-list-box.component.scss']
})
export class DualListBoxComponent implements OnInit, OnChanges {
  @Input() data: Array<{}>;

  @Input() title: string;

  @Input() valueField;

  @Input() labelField;

  @Input() availableLabel = 'Available items';

  @Input() selectedLabel = 'Selected items';

  @Input() PreSelectedItems: Array<{}>;

  @Input() showCounts = true;

  @Input() searchable: boolean = true;

  @Output() onItemsMoved: EventEmitter<IItemsMovedEvent> = new EventEmitter<IItemsMovedEvent>();

  availableOptions: Array<ListBoxOption> = [];
  selectedOptions: Array<ListBoxOption> = [];
  availableOptionsStagingArray: Array<any> = [];
  selectedOptionsStagingArray: Array<any> = [];

  initialAvailableItems: Array<ListBoxOption> = [];
  initialAvailableItemCount: number;
  selectedCount: number;

  dualListBoxForm: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isInputReady) {
      this.availableOptions = [...(this.data || []).map((item: {}, index: number) => ({
        value: item[this.valueField].toString(),
        label: item[this.labelField],
        selected: false
      }))];

      this.selectedOptions = [...(this.PreSelectedItems || []).map((item: {}, index: number) => ({
        value: item[this.valueField].toString(),
        label: item[this.labelField],
        selected: false
      }))];

      this.initialAvailableItemCount = this.availableOptions.length;
      this.initialAvailableItems = this.availableOptions;
      this.availableOptions = [...lodash.differenceWith(this.availableOptions, this.selectedOptions,
        // tslint:disable-next-line:no-unused-expression
        (item: ListBoxOption, value: string) => {item.value === value; })];

      this.selectedOptions.forEach(element => {
        lodash.remove(this.availableOptions, function (item) {
          return item.value === element.value;
        });
      });
    }
  }

  isInputReady() {
    if (this.data !== undefined && this.valueField !== undefined && this.labelField !== undefined) {
      return true;
    }

    return false;
  }

  ngOnInit() {
    this.orderAvailableOptions();
  }

  moveSelectedOptionsToSelected(): void {
    this.selectedOptions = [...this.selectedOptions,
    ...lodash.intersectionWith(this.availableOptions, this.availableOptionsStagingArray,
      (item: ListBoxOption, value: string) => item.value === value)];

    this.availableOptions = [...lodash.differenceWith(this.availableOptions, this.availableOptionsStagingArray,
      (item: ListBoxOption, value: string) => item.value === value)];

    this.onItemsMoved.emit({
      from: 'available',
      to: 'selected',
      available: this.availableOptions,
      selected: this.selectedOptions,
      movedItems: this.availableOptionsStagingArray
    });

    this.clearAllStaging();
    this.orderSelectedOptions();
  }

  filterList(searchString: string) {
    if (searchString.length > 0 && this.isInputReady) {
      const currentSelected = this.selectedOptions.map(obj => obj.value);
      this.availableOptions = this.initialAvailableItems
                                      .filter(obj => currentSelected.indexOf(obj.value) === -1)
                                      .filter(obj => obj.label.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
    } else {
      const currentSelected = this.selectedOptions.map(obj => obj.value);
      this.availableOptions = this.initialAvailableItems.filter(obj => currentSelected.indexOf(obj.value) === -1)
    }
  }

  moveMarkedSelectedItemsToAvailable(): void {
    this.availableOptions = [...this.availableOptions,
    ...lodash.intersectionWith(this.selectedOptions, this.selectedOptionsStagingArray,
      (item: ListBoxOption, value: string) => item.value === value)];

    this.selectedOptions = [...lodash.differenceWith(this.selectedOptions, this.selectedOptionsStagingArray,
      (item: ListBoxOption, value: string) => item.value === value)];

    this.onItemsMoved.emit({
      from: 'selected',
      to: 'available',
      available: this.availableOptions,
      selected: this.selectedOptions,
      movedItems: this.selectedOptionsStagingArray
    });

    this.clearAllStaging();
    this.orderAvailableOptions();
  }

  selectAllAvailable() {
    this.availableOptions.forEach(element => {
      element.selected = true;

      if (this.availableOptionsStagingArray.indexOf(element.value) === -1) {
        this.availableOptionsStagingArray.push(element.value);
      }
    });
  }

  selectNoneAvailable() {
    this.clearAvailableStaging();
  }

  selectAllSelected() {
    this.selectedOptions.forEach(element => {
      element.selected = true;

      if (this.selectedOptionsStagingArray.indexOf(element.value) === -1) {
        this.selectedOptionsStagingArray.push(element.value);
      }
    });
  }

  selectNoneSelected() {
    this.clearSelectedStaging();
  }

  onAvailableItemClick(value: ListBoxOption) {

    this.clearSelectedStaging();

    if (this.availableOptionsStagingArray.indexOf(value.value) > -1) {
      const index = this.availableOptionsStagingArray.indexOf(value.value);
      if (index > -1) {
        this.availableOptionsStagingArray.splice(index, 1);
      }
    }
    else {
      this.availableOptionsStagingArray.push(value.value);
    }

    value.selected = !value.selected;
  }

  onSelectedItemClick(value: ListBoxOption) {

    this.clearAvailableStaging();

    if (this.selectedOptionsStagingArray.indexOf(value.value) > -1) {
      const index = this.selectedOptionsStagingArray.indexOf(value.value);
      if (index > -1) {
        this.selectedOptionsStagingArray.splice(index, 1);
      }
    }
    else {
      this.selectedOptionsStagingArray.push(value.value);
    }

    value.selected = !value.selected;
  }

  private getValues(): string[] {
    return (this.selectedOptions || []).map((item: ListBoxOption) => item.value);
  }

  private clearAllStaging() {
    this.clearAvailableStaging();
    this.clearSelectedStaging();
  }

  private clearAvailableStaging() {
    this.availableOptionsStagingArray = [];
    this.availableOptions.forEach(element => {
      element.selected = false;
    });
  }

  private clearSelectedStaging() {
    this.selectedOptionsStagingArray = [];
    this.selectedOptions.forEach(element => {
      element.selected = false;
    });
  }

  private orderAvailableOptions() {
    this.availableOptions = lodash.orderBy(this.availableOptions, 'label');
  }

  private orderSelectedOptions() {
    this.selectedOptions = lodash.orderBy(this.selectedOptions, 'label');
  }
}
