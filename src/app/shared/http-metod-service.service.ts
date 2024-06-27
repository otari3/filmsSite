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
    this.http.get('assets/data.json').subscribe((data) => {
      this.allData = data;
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

  constructor(private http: HttpClient, private bookMark: BookMarkService) {}
}
