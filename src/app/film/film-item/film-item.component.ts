import { Component, Input, OnInit, inject } from '@angular/core';
import { FilmModule } from '../../shared/film.module';
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { BookMarkService } from '../../shared/book-mark.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.scss',
})
export class FilmItemComponent implements OnInit {
  constructor(private bookMark: BookMarkService) {}
  @Input() film!: FilmModule;
  ngOnInit(): void {}
  addingInBookMark(item: FilmModule) {
    this.bookMark.addingInBookMark(item);
  }
}
