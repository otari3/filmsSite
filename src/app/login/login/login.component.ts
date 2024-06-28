import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private http: HttpMetodService,
    private auth: AuthService,
    private router: Router
  ) {}
  login: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });
  onLogIn() {
    this.http
      .logIn({
        email: this.login.get('email')?.value,
        password: this.login.get('password')?.value,
      })
      .subscribe((token: any) => {
        this.auth.settingLocalStoreg('token', token.token);
        this.router.navigate(['/']).then(() => {
          location.reload();
        });
      });
  }
}
