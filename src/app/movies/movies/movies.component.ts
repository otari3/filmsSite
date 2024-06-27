import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { FilmModule } from '../../shared/film.module';
import { ActivatedRoute } from '@angular/router';
import { SearchingService } from '../../shared/searching.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit, AfterViewChecked {
  constructor(
    private http: HttpMetodService,
    private activetedRouter: ActivatedRoute,
    private search: SearchingService,
    private cdr: ChangeDetectorRef
  ) {}
  @ViewChild('movies') film!: ElementRef;
  searchHidingOrShowing = inject(SearchingService);
  allMovies!: FilmModule[];
  resultCount!: number;

  ngOnInit(): void {
    this.allMovies = this.http.movies;
    this.search.changingSearchTitleDependingOnRoute(this.activetedRouter);
  }
  ngAfterViewChecked(): void {
    if (this.searchHidingOrShowing.valueOfSearchInput) {
      this.resultCount = this.film.nativeElement.children.length;
      this.cdr.detectChanges();
    }
  }
}
