import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-prism-cube',
  templateUrl: './prism-cube.component.html',
  styleUrls: ['./prism-cube.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrismCubeComponent implements OnInit {
  constructor() {}

  @Input() checkedRadiovalue: string = 'front';

  ngOnInit() {}

  addClass() {
    return `show-${this.checkedRadiovalue}`;
  }
}
