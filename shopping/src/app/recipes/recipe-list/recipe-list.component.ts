import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  subscription:Subscription
//  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
    // new Recipe('A test Recipe','This is simply a test','https://www.tasteofhome.com/wp-content/uploads/2017/09/exps23273_CW163681C12_11_2b.jpg')


  constructor(private recipeService:RecipeService,private router:Router){}
  ngOnInit(){
    this.subscription=this.recipeService.recipeChanged.subscribe((recipes:Recipe[])=>{
      this.recipes=recipes;

    
  });
    this.recipes=this.recipeService.getRecipes();
    // throw new Error('Method not implemented.');
  }
  newRecipe(){
this.router.navigate(['recipe/new'])

  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
//   onRecipeSelected(recipe:Recipe){
// this.recipeWasSelected.emit(recipe);

//   }

}
