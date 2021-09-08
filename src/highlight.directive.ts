import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})
export class HighLightDirective implements OnInit {
  constructor(private _elementRef: ElementRef, private _render: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transperant';
  @HostBinding('style.transform') rotate: string = 'rotate(0deg)';
  //@HostBinding('style.transform') scale: string = 'scale(1)';

  ngOnInit() {
    //this._elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave', ['$event']) mouseleave(event) {
    this.rotate = 'rotate(315deg)';
    this.backgroundColor = 'yellow';
    //this.scale = 'scale(1)';
  }

  @HostListener('mouseenter', ['$event']) mouseenter(event) {
    //this.scale = 'scale(1.5)';
    this.rotate = 'rotate(45deg)';
    this.backgroundColor = 'green';
  }
}
