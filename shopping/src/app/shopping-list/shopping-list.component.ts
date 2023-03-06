import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Tomato',1400),
    new Ingredient('Carrot',500)
  ];
  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onAddIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);

  }

}
