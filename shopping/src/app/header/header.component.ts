import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
})
export class HeaderComponent implements OnInit,OnDestroy{
    private userSub:Subscription
    isAuthenticated=false;
    constructor(private datastorage:DataStorageService,private authService:AuthService,private router:Router){}
    @Output() featureSelected=new EventEmitter<string>();
    ngOnInit(){
        this.userSub=this.authService.user.subscribe(user=>{
this.isAuthenticated=!user?false:true;
        });
    }
    // onSelect(feature:string){
    //     this.featureSelected.emit(feature);
    // }
    onSaveData(){
        this.datastorage.storeRecipes();
    }
    fetchRecipe(){
        this.datastorage.fetchRecipe().subscribe();
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
    onLogout(){
        this.authService.logout();
        
    }


}