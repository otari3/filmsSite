import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmModule } from './film.module';
import { BookMarkService } from './book-mark.service';

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
    this.http.get('http://localhost:8080/movies').subscribe((data: any) => {
      this.allData = data.moveis;
      this.filteringData(this.allData);
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
    return this.http.post('http://localhost:8080/register', user);
  }

  constructor(private http: HttpClient, private bookMark: BookMarkService) {}
}
