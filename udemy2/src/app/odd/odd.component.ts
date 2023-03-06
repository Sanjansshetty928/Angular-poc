import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit{
@Input() num:number=0;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
