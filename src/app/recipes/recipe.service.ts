import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){}

    recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 
        'This is a simple text', 
        'https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg',
        [
            new Ingredient('Meat', 2),
            new Ingredient('Salad', 5)
        ]),
        new Recipe('A Test Recipe 2',
        'This is a simple text', 
        'https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg',
        [
            new Ingredient('Meat2', 10),
            new Ingredient('Salad2', 15)
        ])
    ];

    getRecipe() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsToList(ingredients);
    }
}
