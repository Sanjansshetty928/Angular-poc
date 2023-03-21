import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import {  ShoppingListService } from './shopping-list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //  providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  private igChanged:Subscription
   ingredients:Ingredient[];
  //   new Ingredient('Tomato',1400),
  //   new Ingredient('Carrot',500)
  
  constructor(private slService:ShoppingListService){
    // this.ingredients=this.slService.getIngredients();
    // console.log(this.ingredients)
  }

  ngOnInit(){
    // console.log("kuch to chal bc")
    console.log(this.slService.getIngredients())
     this.ingredients=this.slService.getIngredients();
     this.igChanged=this.slService.ingredientChange.subscribe((ingredients:Ingredient[])=>{this.ingredients=ingredients;})
    // throw new Error('Method not implemented.');
  }
  onEditItem(index:number){
    this.slService.startedEdit.next(index);


  }

  // onAddIngredient(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  //   console.log(ingredient)

  // }
  ngOnDestroy(){
    this.igChanged.unsubscribe();
  }

}
