import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpMetodService } from './shared/http-metod-service.service';
import { BookMarkService } from './shared/book-mark.service';
import { SearchingService } from './shared/searching.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpMetodService,
    private bookMark: BookMarkService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}
  navigation!: string;
  ngOnInit(): void {
    this.http.gettingData();
    this.bookMark.filteringAllBookMark();
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.navigation = event.url;
        this.cd.detectChanges();
      }
    });
  }
}
