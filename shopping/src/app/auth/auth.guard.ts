import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1),//take the 1st value and then unsubscribe the value
            map(user=>{
            const isAuth=!!user;
            if(isAuth){
                return true;
            }
            return this.router.createUrlTree(['/auth']);
            // return !!user;
      
        })
        )
        // throw new Error("Method not implemented.");
    

}
}