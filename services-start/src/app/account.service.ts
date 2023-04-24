import { EventEmitter, Injectable } from "@angular/core";
import { LoginingService } from "./logging.service";
@Injectable({providedIn: 'root'}) 
// metadata-only inject when something is added or injected
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated=new EventEmitter<string>();
constructor(private loggingService:LoginingService){}
      addAcount(name:string,status:string){
        this.accounts.push({name:name,status:status});
        this.loggingService.logStatusChange(status);
      }
      updateAccount(id:number,status:string){
        this.accounts[id].status=status;
        this.loggingService.logStatusChange(status);
}
}