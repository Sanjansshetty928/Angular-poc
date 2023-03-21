import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup
constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router){}
ngOnInit(){

  this.route.params.subscribe((params:Params)=>{
    this.id=+params['id'];
    this.editMode=params['id']!=null;
    this.initForm();
    console.log(this.editMode)
  })

}
onSubmit(){
  // const newRecipe=new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['imageUrl'],this.recipeForm.value['ingredients']);
  if(this.editMode){
    this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    console.log(this.recipeForm.value)
  }
  else{
    this.recipeService.addRecipe(this.recipeForm.value);
  }
  this.onCancel();
  console.log(this.recipeForm);
}
cancel(index:number){
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  
  

  
}
onAddIngredient(){
  (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
    'name':new FormControl(null,Validators.required),
    'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])


  }))

}
onCancel(){
  this.router.navigate(['../'],{relativeTo:this.route})

}
get controls() { // a getter!
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}
private initForm(){
  //responsible for intizlising the form
  let recipeName='';
  let imagePath='';
  let description='';
  let recipeIngredients=new FormArray([]);
  if(this.editMode){
    const recipe=this.recipeService.getRecipe(this.id);
    recipeName=recipe.name;
    imagePath=recipe.imagePath;
    description=recipe.description;
    if(recipe['ingredients']){
      for(let ingredient of recipe.ingredients){
        recipeIngredients.push(new FormGroup({
          'name':new FormControl(ingredient.name,Validators.required),
          'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)] )


        }))
      }
    }

  }
  this.recipeForm=new FormGroup({
    'name':new FormControl(recipeName,Validators.required),
    'imagePath':new FormControl(imagePath,Validators.required),

    'description':new FormControl(description,Validators.required),
    'ingredients':recipeIngredients


    
  });
  console.log(recipeIngredients);
}
}
