import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpMetodService } from '../../shared/http-metod-service.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private http: HttpMetodService,
    private auth: AuthService,
    private router: Router
  ) {}
  register: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    repeatedPassword: new FormControl('', Validators.required),
  });
  onCreateAccount() {
    this.http
      .postUser({
        email: this.register.get('email')?.value,
        password: this.register.get('password')?.value,
      })
      .subscribe((data: any) => {
        this.auth.settingLocalStoreg('token', data.token);
        this.router.navigate(['/']).then(() => {
          location.reload();
        });
      });
  }
}
