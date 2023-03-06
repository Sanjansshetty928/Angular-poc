import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy1';
  servers:string[]=[];
  userName:string='';  
  onAddServer(){
    const x='Another server'
    this.servers.push(x);
  }
  onRemoveServer(id:number){
    const position=id+1;
    this.servers.splice(position,1);
  }

 add(){
  let x=this.userName.toLowerCase();
  console.log(x);
 }

}
