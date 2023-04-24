import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Numbers=[1,2,3,4,5,6,7,8,9,10]
  onlyOdd=false;
  value='';
evenNumbers=[2,4]
oddNumbers=[1,3,5]
   @ViewChild('clickChange', {static: true}) elementRef: ElementRef;
  //  constructor(private elementRef:ElementRef){}
  
  // userName:string='';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // reset(){
  //   this.userName='';
  // }
  // isEven(){
  //   return this.Numbers.filter(n=>n%2==0);
  // }

  title = 'trial';
  // message:string='kiccha';
  // displayMessage(msg:string){
  //   this.message=msg;
  // }
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }
  onChangeFirst() {
    this.serverElements[0].name = 'changed!';

  }
  onDestroy(){
    this.serverElements.splice(0,1);
  }
  onClick(){
    console.log("--------------->>   called")
    this.elementRef.nativeElement.style.backgroundColor='green';
    // console.log(this.elementRef)
}
// onDestroy(){
//   this.Numbers.splice(2,3);
// }

}


