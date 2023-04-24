import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent{
    @ViewChild('f', { static: false }) signupForm!: NgForm;

isLoginMode=true;
error:string=null;
constructor(private authService:AuthService,private router:Router){}
onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
}
onSubmit(){
    if(!this.signupForm.valid){
        return;
    }
    const email=this.signupForm.value.email;
    const password=this.signupForm.value.password;
    let authObs:Observable<AuthResponseData>;
    if(!this.isLoginMode){
        authObs=this.authService.login(email,password)
    }
    else{
        authObs=this.authService.signUp(email,password)
    }
    // console.log(this.signupForm.value);
    
    
     this.signupForm.reset();
    

authObs.subscribe(resDta=>{
    console.log(resDta);
    this.router.navigate(['/recipe']);
},
    errorMessage=>{
        console.log(errorMessage);
        this.error=errorMessage;
      
        
    });
}
onHandleError(){
    this.error=null;
}
}

