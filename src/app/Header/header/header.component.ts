import { Component, EventEmitter, Output, output } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
