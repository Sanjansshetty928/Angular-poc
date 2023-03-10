import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired=new EventEmitter<number>();
  interval:any
  lastNumber=0;
  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onStartGame(){
    this.interval=setInterval(()=>{
      this.intervalFired.emit((this.lastNumber+1,
        this.lastNumber++))

    },1000);

  }
  onStopGme(){
    clearInterval(this.interval);
    
  }

}
