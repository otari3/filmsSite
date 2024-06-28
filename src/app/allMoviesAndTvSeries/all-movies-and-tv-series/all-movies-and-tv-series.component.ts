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
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { FilmModule } from '../../shared/film.module';
import { ActivatedRoute } from '@angular/router';
import { SearchingService } from '../../shared/searching.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-all-movies-and-tv-series',
  templateUrl: './all-movies-and-tv-series.component.html',
  styleUrl: './all-movies-and-tv-series.component.scss',
})
export class AllMoviesAndTvSeriesComponent implements OnInit, AfterViewChecked {
  constructor(
    private http: HttpMetodService,
    private activtedRouter: ActivatedRoute,
    private searching: SearchingService,
    private cdr: ChangeDetectorRef,
    private auth: AuthService
  ) {}
  allMoviesAndTvSeries!: FilmModule[];
  searchingInject = inject(SearchingService);
  trendingMovies!: FilmModule[];
  @ViewChild('allMovesAndTvSeries') film!: ElementRef;
  results!: number;

  ngOnInit(): void {
    this.allMoviesAndTvSeries = this.http.allMoviesAndTvSeries;
    this.searching.changingSearchTitleDependingOnRoute(this.activtedRouter);
    this.allMoviesAndTvSeries = this.http.allMoviesAndTvSeries;
  }
  ngAfterViewChecked(): void {
    if (this.searching.valueOfSearchInput) {
      this.results = this.film.nativeElement.children.length;
      this.cdr.detectChanges();
    }
  }
}
