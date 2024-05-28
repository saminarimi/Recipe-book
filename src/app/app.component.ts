import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-recipe-book';
  loadedfeature: string = 'recipes';

  onNavigate(event: string) {
    this.loadedfeature = event;

  }
}
