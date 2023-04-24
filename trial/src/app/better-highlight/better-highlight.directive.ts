import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string='transparent';
  @Input('appBetterHighlight') highlightColor:string='orange';
  // dom property
  @HostBinding('style.backgroundColor') backgroundColor:string
  


  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseleave') mouseOver(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','yellow');
    console.log(this.mouseOver)
    this.backgroundColor=this.defaultColor;


  }
  @HostListener('mouseover') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent')
    this.backgroundColor=this.highlightColor
  }
}
