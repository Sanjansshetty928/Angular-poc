import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
  
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('f') slForm:NgForm
  subscription:Subscription
  editMode=false
  editedItemIndex:number
  editedItem:Ingredient
// @ViewChild('namedInput',{static:true})  namedInputRef:ElementRef;
// @ViewChild('amountInput',{static:true}) amountInputRef:ElementRef;
constructor(private slService:ShoppingListService){}
  ngOnInit(): void {
    this.subscription=this.slService.startedEdit.subscribe(
      (index:number)=>{
this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slService.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
    
    // throw new Error('Method not implemented.');
  }

// @Output() ingredientAdded=new EventEmitter<Ingredient>();
onSubmit(form:NgForm){
  // const ingreName=this.namedInputRef.nativeElement.value;
  // const ingreAmount=this.amountInputRef.nativeElement.value;
  const value=form.value
  const newIngred=new Ingredient(value.name,value.amount);
  if(this.editMode){
    this.slService.updateIngredients(this.editedItemIndex,newIngred);

  }
  else{
    this.slService.addIngredient(newIngred);
  }
  this.editMode=false;
  form.reset()
       
  //   t his.slService.addIngredient(newIngred);
  // this.ingredientAdded.emit(ingred);
  // console.log(this.namedInput.nativeElement.value);
  // console.log(this.amountInput.nativeElement.value)
  

}
onClear(){
  this.slForm.reset();
  this.editMode=false
  

}
onDelete(){
  this.slService.deleteIngredient(this.editedItemIndex);
  this.onClear();
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
