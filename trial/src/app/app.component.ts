import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // userName:string='';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  // reset(){
  //   this.userName='';
  // }
 
 
  title = 'trial';
  // message:string='kiccha';
  // displayMessage(msg:string){
  //   this.message=msg;
  // }
  serverElements=[{type:'server',name:'Testserver',content:'Just a test!'}];
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    })
  }
}
