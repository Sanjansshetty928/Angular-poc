import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //eventemitter is an object that help to emit all events Angular. @Output() decorator in a child component or directive allows data to flow from the child to the parent. A property decorated with @Output in child component is used to raise an event to notify the parent of the change. That property must be of type EventEmitter, which is a class in @angular/core that you use to emit custom events
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpcreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName='';
  newServerContent='';
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

  onAddServer(){
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
    this.newServerName=this.newServerContent='';
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
    this.newServerName=this.newServerContent='';

  }

  
}
