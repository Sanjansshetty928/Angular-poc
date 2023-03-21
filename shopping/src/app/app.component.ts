import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('offline')
    },2000)
  })
  title = 'shopping';
  loadedFeature='recipe';

  onNavigate(feature:string){
    this.loadedFeature=feature;
    console.log(this.loadedFeature)
  }
  servers=[
    {
      serverName:'linux',
      status:'offline'
    },
    {
      serverName:'Idea',
      status:'offline'
    },
    {
      serverName:'lenovi',
      status:'offline'
    },
    {
      serverName:'li',
      status:'online'
    },
  ]
  filteredStatus='';
  onAddServer(){
    this.servers.push({
      serverName:'sanjan',
      status:'offline'
    })
  }
}
