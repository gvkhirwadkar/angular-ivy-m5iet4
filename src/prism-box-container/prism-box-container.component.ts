import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prism-box-container',
  templateUrl: './prism-box-container.component.html',
  styleUrls: ['./prism-box-container.component.css']
})
export class PrismBoxContainerComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  showBox = false;
  showPrism = false;
  checkedRadiovalue = 'front';

  ngOnInit() {
    if (this._router.url === '/prism-cube') {
      this.showPrism = true;
    } else if (this._router.url === '/box') {
      this.showBox = true;
    } else if (this._router.url === '/prism-box') {
      this.showPrism = true;
      this.showBox = true;
    }
  }
}
