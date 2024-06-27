import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { BookMarkService } from '../../shared/book-mark.service';
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { SearchingService } from '../../shared/searching.service';
import { FilmModule } from '../../shared/film.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrl: './bookmarked.component.scss',
})
export class BookmarkedComponent implements OnInit, AfterViewChecked {
  constructor(
    private bookMark: BookMarkService,
    private http: HttpMetodService,
    private activtedRout: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  bookmarkTvSeries!: FilmModule[];
  bookMarkMovies!: FilmModule[];
  searching = inject(SearchingService);
  @ViewChild('filmBookMarkMovies') film!: ElementRef;
  @ViewChild('filmBookMarkTvSeries') filmtvSeries!: ElementRef;
  result!: number;
  ngOnInit(): void {
    this.bookmarkTvSeries = this.bookMark.bookMarkTvSeries;
    this.bookMarkMovies = this.bookMark.bookMarkMovies;
    this.searching.changingSearchTitleDependingOnRoute(this.activtedRout);
  }
  ngAfterViewChecked(): void {
    if (this.searching.valueOfSearchInput) {
      this.result =
        this.film.nativeElement.children.length +
        this.filmtvSeries.nativeElement.children.length;
      this.cdr.detectChanges();
    }
  }
}
