import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    newIngredientArray = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Egg', 5),
        new Ingredient('Tomato', 10)
    ];

    addNewIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.newIngredientArray.emit(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredientsToList(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.newIngredientArray.emit(this.ingredients.slice());
    }
}