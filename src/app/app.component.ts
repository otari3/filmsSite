import { Component, OnInit } from '@angular/core';
import { HttpMetodService } from './shared/http-metod-service.service';
import { BookMarkService } from './shared/book-mark.service';
import { SearchingService } from './shared/searching.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpMetodService,
    private bookMark: BookMarkService
  ) {}

  ngOnInit(): void {
    this.http.gettingData();
    this.bookMark.filteringAllBookMark();
  }
}
