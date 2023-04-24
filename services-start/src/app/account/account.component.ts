import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoginingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoginingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private loggingService:LoginingService,private accountsService:AccountService){}

  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // this.loggingService.logStatusChange(status);
    this.accountsService.updateAccount(this.id,status);
this.accountsService.statusUpdated.emit(status);
  }
}
