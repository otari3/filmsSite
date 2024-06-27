import { EventEmitter, Injectable } from '@angular/core';
import { FilmModule } from './film.module';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookMarkService {
  handelingBookMarkState = new BehaviorSubject<FilmModule[]>([]);
  bookMarkTvSeries: FilmModule[] = [];
  bookMarkMovies: FilmModule[] = [];
  filteringAllBookMark() {
    this.handelingBookMarkState.subscribe((data: FilmModule[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === 'Movie') {
          this.bookMarkMovies.push(data[i]);
        }
        if (data[i].category === 'TV Series') {
          this.bookMarkTvSeries.push(data[i]);
        }
      }
    });
  }
  //this event  function is used in filmcomponent and checks what catagory is our film
  //and where in our bookmark it should be placed
  //with first if it checks if it is not bookmarked so it should be place in bookmarks
  //with else if it checks if it should be removed from bookmarkes so if it is arlady bookmarked
  //if it is we check where from our bookmark it should be removed (tvseries or movies)

  addingInBookMark(film: FilmModule) {
    if (!film.isBookmarked) {
      if (film.category === 'Movie') {
        film.isBookmarked = true;
        this.bookMarkMovies.push(film);
      } else if (film.category === 'TV Series') {
        film.isBookmarked = true;
        this.bookMarkTvSeries.push(film);
      }
    } else if (film.isBookmarked) {
      if (film.category === 'TV Series') {
        this.removingBookMarkFromTvSeries(film.title);
      } else if (film.category === 'Movie') {
        this.removingBookMarkFromMovies(film.title);
      }
      film.isBookmarked = false;
    }
  }
  removingBookMarkFromTvSeries(title: string) {
    let movie: any = this.bookMarkTvSeries.find((s: FilmModule) => {
      return s.title === title;
    });

    this.bookMarkTvSeries.splice(this.bookMarkTvSeries.indexOf(movie), 1);
  }
  removingBookMarkFromMovies(title: string) {
    let movie: any = this.bookMarkMovies.find((s: FilmModule) => {
      return s.title === title;
    });

    this.bookMarkMovies.splice(this.bookMarkMovies.indexOf(movie), 1);
  }
  constructor() {}
}
