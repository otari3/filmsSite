import { Component, OnInit } from '@angular/core';
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { FilmModule } from '../../shared/film.module';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
})
export class TrendingComponent implements OnInit {
  allTrending!: FilmModule[];
  constructor(private http: HttpMetodService) {}
  ngOnInit(): void {
    this.allTrending = this.http.trending;
  }
}
