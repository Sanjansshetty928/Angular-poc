import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pocc';
  // today=new Date()
  //   ngOnInit(): void {
  //     setInterval(()=>this.today=new Date(),1000)
      
  //   }
  today:Date=new Date();
  ngOnInit():void{
    setInterval(()=>this.today=new Date())
  }
  tit='sanjan'
  
  
  
}
