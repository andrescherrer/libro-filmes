import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  private apiKey = '03ed3b8e687fd639a5e6d2f1e42b5672';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&language=pt-BR&page=1`);
  }
}
