import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy2';
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  onIntervalFired(firedNumber:number){
    if(firedNumber%2==0){
      this.evenNumbers.push(firedNumber);
      console.log(this.evenNumbers);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }
    
  }
  
}
