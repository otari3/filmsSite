import { Component, Input, OnInit, inject } from '@angular/core';
import { FilmModule } from '../../../shared/film.module';
import { BookMarkService } from '../../../shared/book-mark.service';

@Component({
  selector: 'app-trending-single',
  templateUrl: './trending-single.component.html',
  styleUrl: './trending-single.component.scss',
})
export class TrendingSingleComponent {
  @Input() trendingMove!: FilmModule;
  bookMark = inject(BookMarkService);
}
