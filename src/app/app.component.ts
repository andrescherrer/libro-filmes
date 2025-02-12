import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent],
  template: `<app-movie-list></app-movie-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libro-filmes';
}
