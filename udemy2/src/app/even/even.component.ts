import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  //input() because to make it bindable from outside
  @Input() num:number=0;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
