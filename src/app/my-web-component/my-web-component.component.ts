import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-my-web-component',
  templateUrl: './my-web-component.component.html',
  styleUrls: ['./my-web-component.component.css']
})
export class MyWebComponentComponent implements OnInit {

  constructor() { }

  @Input() info: string;
  @Output() infoChange = new EventEmitter<string>();

  ngOnInit() {
  }

  click() {
    this.infoChange.next(this.info);
  }

}
