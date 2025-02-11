import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmModule } from './film.module';
import { BookMarkService } from './book-mark.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpMetodService {
  allData: any;
  trending: FilmModule[] = [];
  tvSeries: FilmModule[] = [];
  movies: FilmModule[] = [];
  allMoviesAndTvSeries: FilmModule[] = [];
  allBookMark: FilmModule[] = [];
  gettingData() {
    this.auth.loadingStarted.next(true);
    const newHeader = new HttpHeaders({
      Authorization: `Bearer ${this.auth.gettingLocalStoreg('token')}`,
    });
    this.http
      .get('https://filmsitebackend.onrender.com/movies', {
        headers: newHeader,
      })
      .subscribe((data: any) => {
        this.allData = data.moveis;
        this.filteringData(this.allData);
        this.auth.loadingStarted.next(false);
      });
  }
  filteringData(allData: FilmModule[]) {
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].isTrending) {
        this.trending.push(allData[i]);
      } else {
        this.allMoviesAndTvSeries.push(allData[i]);
      }
      if (allData[i].category === 'Movie') {
        this.movies.push(allData[i]);
      }
      if (allData[i].category === 'TV Series') {
        this.tvSeries.push(allData[i]);
      }
      if (allData[i].isBookmarked) {
        this.allBookMark.push(allData[i]);
      }
    }
    this.bookMark.handelingBookMarkState.next(this.allBookMark);
  }
  postUser(user: { email: string; password: string }) {
    return this.http.post(
      'https://filmsitebackend.onrender.com/register',
      user
    );
  }
  logIn(user: { email: string; password: string }) {
    return this.http.post('https://filmsitebackend.onrender.com/login', user);
  }
  postBookMark(id: string) {
    return this.http.post(
      'https://filmsitebackend.onrender.com/postbookmark',
      id
    );
  }

  constructor(
    private http: HttpClient,
    private bookMark: BookMarkService,
    private auth: AuthService
  ) {}
}
