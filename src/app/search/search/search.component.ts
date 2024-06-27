import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { SearchingService } from '../../shared/searching.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  constructor(
    private activetedRout: ActivatedRoute,
    private search: SearchingService
  ) {}
  searching = inject(SearchingService);

  ngOnInit(): void {}
}
