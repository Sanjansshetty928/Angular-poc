import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
      console.log(this.id,typeof(this.id))
    })
    // const id=this.route.snapshot.params['id'];

  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  editShoppingList(){
    this.router.navigate(['recipe/'+this.id+'/edit']);
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe'])
  }

}
