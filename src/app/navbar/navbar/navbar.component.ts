import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '/src/styles.scss'],
})
export class NavbarComponent {
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private auth: AuthService
  ) {}
  token = this.auth.gettingLocalStoreg('token');
  activeingBookMarkColors(element: HTMLLIElement) {
    if (element.classList.contains('active')) {
      return '#fff';
    } else {
      return '#5A698F';
    }
  }
  onLogIn() {
    if (!this.token) {
      this.router.navigate(['/login']);
    } else if (this.token) {
      this.auth.deletingLocalStoreg('token');
      this.router.navigate(['/']).then(() => {
        location.reload();
      });
    }
  }
}
