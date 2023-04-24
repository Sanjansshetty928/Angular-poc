import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError,Subject,tap,throwError } from "rxjs";
import { User } from "./user.model";
export interface AuthResponseData{
    kind:string,
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string
    registered?:boolean
}
@Injectable({providedIn:'root'})
export class AuthService{
    // we can call the next value to emit a value and subscribe them.get access to the currently active user even if we subscribe after the even is emitted
    user=new BehaviorSubject<User>(null);
    private tokenExpirationTimer:any;
    // token:string=null;
    constructor(private http:HttpClient,private router:Router){}
    signUp(email:string,password:string){
return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC816dkrNW8QnVU9How5Sb7Y34C4yFOKEw',{
    email:email,
    password:password,
    returnSecureToken:true
}).pipe(catchError(this.handleError),tap(resData=>{
    this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
   
}));
    }
login(email:string,password:string){
    return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC816dkrNW8QnVU9How5Sb7Y34C4yFOKEw',{
        email:email,
    password:password,
    returnSecureToken:true
    }).pipe(catchError(this.handleError),tap(resData=>{
        this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
}))
}
logout(){
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
        clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer=null;
}
autoLogin(){
    const userData:{
        email:string;
        id:string;
        _token:string;
        _tokenExpirationDate:string;
    }=JSON.parse(localStorage.getItem('userData'));
    if(!userData){
        return;
    }
    const loadedUser=new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));
    if(loadedUser.token){
        this.user.next(loadedUser);
        const expirationDuration=new Date(userData._tokenExpirationDate).getTime()-new Date().getTime();
        this.autoLogout(expirationDuration);
    }
}
autoLogout(expirationDuration:number){
    this.tokenExpirationTimer=setTimeout(()=>{
        this.logout();
    },expirationDuration);

}

private handleAuthentication(email:string,userId:string,token:string,expiresIn:number){
    const expirationDate=new Date(new Date().getTime() + +expiresIn*1000);
    const user=new User(email,userId,token,expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn*1000);//milliseconds
    localStorage.setItem('userData',JSON.stringify(user));
}
private handleError(errorRes:HttpErrorResponse)
{
    let errorMessage='An unknown error occured';
    if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
    }
    switch (errorRes.error.error.message){
        case 'EMAIL_EXISTS':
        errorMessage='This email already exits';
        break;
        case 'EMAIL_NOT_FOUND':
            errorMessage='This email is not found';
            break;
        case 'INVALID_PASSWORD':
            errorMessage='This is password is invalid';
            break;    
    }

    return throwError(errorMessage);
}
    
}
