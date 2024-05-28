import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Sample test', 'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg')
  ];
  //@Output() recipes = new EventEmitter<{ name: string, desc: string, imagePath: string }>();
  constructor() { }

  ngOnInit(): void {

  }

  // getRecipes() {
  //   this.recipes.emit({ name: 'a', desc: "b", imagePath: 'c' })
  // }
}
