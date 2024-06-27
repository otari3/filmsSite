import { Component, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '/src/styles.scss'],
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {}
  activeingBookMarkColors(element: HTMLLIElement) {
    if (element.classList.contains('active')) {
      return '#fff';
    } else {
      return '#5A698F';
    }
  }
}
