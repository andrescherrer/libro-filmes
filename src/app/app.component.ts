import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent, RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libro-filmes';
}
