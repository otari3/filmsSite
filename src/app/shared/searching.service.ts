import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  searchTitle = '';
  valueOfSearchInput = '';
  changingSearchTitleDependingOnRoute(router: ActivatedRoute) {
    router.params.subscribe((data: Params) => {
      if (data['id'] === '1') {
        this.searchTitle = 'Search for Movies';
      } else if (data['id'] === '2') {
        this.searchTitle = 'Search for TV series';
      } else if (data['id'] === '3') {
        this.searchTitle = 'Search for Bookmarked Shows';
      } else {
        this.searchTitle = 'Search for Movies or TV series';
      }
    });
  }
  showingOrHidingElements(title: string) {
    //we are removeing spaces so if searchinput will contains space that too will search
    let titleWithoutSpace = title.split(' ').join('');
    let searchingWithoutSpace = this.valueOfSearchInput.split(' ').join('');
    if (
      titleWithoutSpace.toLowerCase().match(searchingWithoutSpace.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private activtedRouter: ActivatedRoute) {}
}
