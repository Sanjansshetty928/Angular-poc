import { Component } from "@angular/core";

@Component({
    selector:'app-warning-alert',
    templateUrl:'./warning-alert.component.html',
    // styles:[
    //     `
    //     p{
    //         padding:20px;
    //         background-color:red;
    //         border:1px solid blue;

            
    //     }`
    // ]
})

export class WarningAlertComponent{
    serverId:number=10;
    serverStatus:string='offline';
    constructor(){
        this.serverStatus=Math.random()>0.5 ? 'offline':'online';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus==='online'?'green':'red'
    }

}