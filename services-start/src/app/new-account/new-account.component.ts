import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoginingService } from '../logging.service';
// import { LoginingService } from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoginingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private loggingService:LoginingService,private accountsService:AccountService){
    this.accountsService.statusUpdated.subscribe((status:string)=>alert("new status"+status));
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName,accountStatus)
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // this.loggingService.logStatusChange(accountStatus);
    //creating instance manually
    // const service=new LoginingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
