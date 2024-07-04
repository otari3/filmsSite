import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SearchComponent } from './search/search/search.component';
import { HomeComponent } from './home/home/home.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { TvSeriesComponent } from './tvSeries/tv-series/tv-series.component';
import { BookmarkedComponent } from './bookmarked/bookmarked/bookmarked.component';

import { FilmItemComponent } from './film/film-item/film-item.component';
import { TrendingComponent } from './trending/trending/trending.component';
import { TrendingSingleComponent } from './trending/trendingSingle/trending-single/trending-single.component';
import { HttpClientModule } from '@angular/common/http';
import { AllMoviesAndTvSeriesComponent } from './allMoviesAndTvSeries/all-movies-and-tv-series/all-movies-and-tv-series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent,
    FilmItemComponent,
    TrendingComponent,
    TrendingSingleComponent,
    AllMoviesAndTvSeriesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
