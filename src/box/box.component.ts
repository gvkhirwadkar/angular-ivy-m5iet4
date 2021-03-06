import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() checkedRadiovalue: string = 'front';

  constructor() {}

  ngOnInit() {}

  addClass() {
    return `show-${this.checkedRadiovalue}`;
  }
}
