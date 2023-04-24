import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        console.log('request is on the way');
        console.log(req.url)
        const modifiedRequest=req.clone({
            headers:req.headers.append('Auth','xyz')
        })
        return next.handle(modifiedRequest).pipe(tap(event=>{
            console.log(event);
            if(event.type===HttpEventType.Response){
                console.log("response arrived");
                console.log(event.body);
            }
        }));
    }
}