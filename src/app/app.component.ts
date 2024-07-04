import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpMetodService } from './shared/http-metod-service.service';
import { BookMarkService } from './shared/book-mark.service';
import { SearchingService } from './shared/searching.service';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

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
    private cd: ChangeDetectorRef,
    private auth: AuthService
  ) {}
  navigation!: string;
  loadingbar = 0;
  loadingStarted = false;
  onLoadingStarted() {
    let addingToLoadingBar = setInterval(() => {
      if (!this.loadingStarted) {
        clearInterval(addingToLoadingBar);
        this.loadingbar = 0;
      }
      if (this.loadingbar < 90) {
        this.loadingbar += 10;
      }
    }, 100);
  }
  ngOnInit(): void {
    this.auth.loadingStarted.subscribe((starter: boolean) => {
      if (starter) {
        this.loadingStarted = true;
        this.onLoadingStarted();
      } else if (!starter) {
        this.loadingStarted = false;
      }
    });
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
