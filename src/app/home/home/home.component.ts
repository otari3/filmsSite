import { Component, inject } from '@angular/core';
import { SearchingService } from '../../shared/searching.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searching = inject(SearchingService);
}
