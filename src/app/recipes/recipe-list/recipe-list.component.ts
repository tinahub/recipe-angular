import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tostadas con aguacate','Las preferidas de los Millennials.',
    'https://c1.staticflickr.com/3/2847/12565663524_f4aa12a246_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
