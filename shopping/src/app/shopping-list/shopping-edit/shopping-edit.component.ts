import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('namedInput',{static:true})  namedInput:ElementRef;
@ViewChild('amountInput',{static:true}) amountInput:ElementRef;
@Output() ingredientAdded=new EventEmitter<Ingredient>();
onAddItem(){
  const ingreName=this.namedInput.nativeElement.value;
  const ingreAmount=this.amountInput.nativeElement.value;
  const ingred=new Ingredient(ingreName,ingreAmount);
  console.log(ingred);
  this.ingredientAdded.emit(ingred);
  // console.log(this.namedInput.nativeElement.value);
  // console.log(this.amountInput.nativeElement.value)
  

}
}
