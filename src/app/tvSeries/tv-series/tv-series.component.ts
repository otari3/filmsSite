import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { FilmModule } from '../../shared/film.module';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { SearchingService } from '../../shared/searching.service';
import { FilmItemComponent } from '../../film/film-item/film-item.component';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.scss',
})
export class TvSeriesComponent implements OnInit, AfterViewChecked {
  constructor(
    private http: HttpMetodService,
    private searchService: SearchingService,
    private activtedRouter: ActivatedRoute,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}
  allTvSeries!: FilmModule[];
  search = inject(SearchingService);
  @ViewChild('tvSeries') film!: ElementRef;
  result!: number;

  ngOnInit(): void {
    this.allTvSeries = this.http.tvSeries;
    this.searchService.changingSearchTitleDependingOnRoute(this.activtedRouter);
  }
  ngAfterViewChecked(): void {
    if (this.search.valueOfSearchInput) {
      this.result = this.film.nativeElement.children.length;
      this.cdr.detectChanges();
    }
  }
}
