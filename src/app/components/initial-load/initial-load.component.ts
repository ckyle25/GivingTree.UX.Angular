import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initial-load',
  templateUrl: './initial-load.component.html',
  styleUrls: ['./initial-load.component.scss']
})
export class InitialLoadComponent implements OnInit {

  @Input() show: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
