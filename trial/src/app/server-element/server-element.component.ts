import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input('srvElement') element:{ type: string; name: string; content: string; } | undefined;
  @Input() name:string
  @ViewChild('heading',{static:true}) header:ElementRef;
  @ContentChild('paragraph',{static:true}) paraGraph:ElementRef;

  constructor(){
    console.log('constructor called')
  } 
  ngOnDestroy(): void {
    console.log('destroy is called')
    // throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked called")
  }
  ngAfterViewInit(){
    console.log("afterviewinit is called");
    console.log('Text Content'+this.header.nativeElement.textContent);
    console.log('Text content ' +this.paraGraph.nativeElement.textContent);


    
  }
  ngAfterContentChecked(): void {
    console.log("aftercontentchecked")
  }
  
  ngOnInit() {
    console.log("ngOnit is called")
    console.log('Text Content'+this.header.nativeElement.textContent)
    console.log('Text content ' +this.paraGraph.nativeElement.textContent);
    // throw new Error('Method not implemented.');
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnchanges runs");
    console.log(changes)


  } 
  ngDoCheck(): void {
      console.log("docheck called")
  }
  ngAfterContentInit(): void {
      console.log("afterContent called")
  }

}
