import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus='no server was created'
  serverName='';
  serverCreated=false;
  servers=['TestServer','TestServer 2'];

userName='';
  constructor(){
    setTimeout(()=>{this.allowNewServer=true;
    },5000)
  }
  ngOnInit(): void {
    
    this.userName='SANJAN';
    console.log(this.userName);
  }
  ngOnChange():void{
    this.userName='bhuvan';
  }
 
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created ' +  this.serverName;
  }
  onUpdateServerName(event:Event){
    // console.log(event)
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  updateuserName(event:Event){
    this.userName=(<HTMLInputElement>event.target).value;
  }
  // clearString(){
  //   this.userName='';
  // }
  serverId=101;
  serverStatus='401';
  getMethodStatus(){
    return this.serverStatus;
  }

}
