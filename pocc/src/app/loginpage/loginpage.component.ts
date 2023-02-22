import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../comp/login';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  constructor(private route:Router){}
  // loginDetails!:Login
  ngOnInit(): void {
    
    
  }
  // saveDetails(userDetails:any){
  //   console.log(userDetails)
  // }
  saveDetails(loginde: Login){
    if(loginde.userName == "Admin" && loginde.password == "Admin@123"){
      console.log(loginde)
    this.route.navigate(['/dashboard',loginde.userName])
    }
    else{
      alert("Invalid Credentials")
    }
    
  }
  

 
}
