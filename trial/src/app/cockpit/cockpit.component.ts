import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //eventemitter is an object that help to emit all events Angular. @Output() decorator in a child component or directive allows data to flow from the child to the parent. A property decorated with @Output in child component is used to raise an event to notify the parent of the change. That property must be of type EventEmitter, which is a class in @angular/core that you use to emit custom events
  @Output('serverCreated') serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpcreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('serverNameInput',{static:true}) serverNameInput:ElementRef;
  // checkNull:string = "a";
  // ngOnChanges(){
  //   this.serverCreated=this.blueprintCreated;
  // }
 allowServer:boolean=false;
  // newServerName='';
  // newServerContent='';
  // // serverElements: any;
  // @Output() messageEvent=new EventEmitter<string>;
  // mess:string='hello';
  // counter:number=1;
  
   ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
   }
  //  onButtonClick(){
  //   this.messageEvent.emit(this.mess + ` ` + this.counter++);
  //  }
// nameInp is server content value
  onAddServer(nameInp:HTMLInputElement){
    console.log(nameInp.value);
    
    this.serverCreated.emit({serverName:this.serverNameInput.nativeElement.value,serverContent:nameInp.value});
    
    console.log(this.serverNameInput.nativeElement.value)
    nameInp.value=this.serverNameInput.nativeElement.value='';
  //   console.log("outside if "+ this.allowServer)
  //    if((nameInput.value).length != 0 && (this.serverContentInput.nativeElement.value).length !=0){
  //     this.allowServer=true; 
  //     console.log("inside if "+ this.allowServer)
  //  }
}
  onAddBlueprint(input:HTMLInputElement){
    this.blueprintCreated.emit({serverName:this.serverNameInput.nativeElement.value,serverContent:input.value});
   
    input.value=this.serverNameInput.nativeElement.value='';

  }
  


  
}
