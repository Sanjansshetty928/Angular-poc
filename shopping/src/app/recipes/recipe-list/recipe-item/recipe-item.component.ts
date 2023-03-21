import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() index:number;
  
ngOnInit(){
  // throw new Error('Method not implemented.');
}
constructor(private recipeService:RecipeService){}

// @Output() recipeSelected=new EventEmitter<void>();



onSelected(){
  // this.recipeSelected.emit();
//    this.recipeService.recipeSelected.emit(this.recipe);
// console.log(this.recipe);
}
}
