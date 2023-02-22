import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { studentData } from '../comp/studentDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name!:string
  students:studentData[]=[
    {
      firstName:"Sanjan",
      age:21,
      branch:"ISE",
      rollno:101
    },
    {
    firstName:"Shetty",
      age:22,
      branch:"CSE",
      rollno:102
    }
  ]
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.params["uname"]
    // throw new Error('Method not implemented.');
  }


}
