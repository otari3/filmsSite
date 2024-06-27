import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { TvSeriesComponent } from './tvSeries/tv-series/tv-series.component';
import { BookmarkedComponent } from './bookmarked/bookmarked/bookmarked.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MoviesComponent },
  { path: 'tvseries/:id', component: TvSeriesComponent },
  { path: 'bookmarks/:id', component: BookmarkedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
