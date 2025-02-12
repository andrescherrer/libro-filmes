import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    console.log('Movie ID:', movieId); 

    if (movieId) {
      this.movieService.getMovieDetails(Number(movieId)).subscribe((response) => {
        this.movie = response;
      },
      (error) => {
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    );
    }
  }
}