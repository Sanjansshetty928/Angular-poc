import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolveService } from './recipes/recipe-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
   {

  path:'',redirectTo:'/recipe',pathMatch:'full'
  },
  {
    path:'recipe',component:RecipesComponent,canActivate:[AuthGuard], children:[
      {path:'',component:RecipeStartComponent},
      {path:'new',component:RecipeEditComponent},
      {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolveService]},

      {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolveService]}

    ]
  },
  // {
  //   path:'shopping-edit',component:ShoppingEditComponent
  // },
  {
    path:'shopping-list',component:ShoppingListComponent
  },
  {
    path:'auth',component:AuthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
