import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emr-action-button',
  templateUrl: './emr-action-button.component.html',
  styleUrls: ['./emr-action-button.component.scss']
})
export class EmrActionButtonComponent implements OnInit {

  @Input() iconClass: string;
  @Input() buttonLabel: string;
  @Input() iconColor: string;

  constructor() { }

  ngOnInit() {
  }

  setIcon(): string {
    return this.iconClass;
  }
}
