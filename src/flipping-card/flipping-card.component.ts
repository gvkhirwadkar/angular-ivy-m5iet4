import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.css']
})
export class FlippingCardComponent implements OnInit, AfterViewInit {
  isFlipped = false;
  constructor() {}

  ngAfterViewInit(): void {}

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  ngOnInit() {}
}
