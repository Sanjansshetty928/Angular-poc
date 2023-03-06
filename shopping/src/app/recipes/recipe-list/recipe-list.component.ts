import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A test Recipe','This is simply a test','https://www.tasteofhome.com/wp-content/uploads/2017/09/exps23273_CW163681C12_11_2b.jpg')

  ];
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);

  }

}
