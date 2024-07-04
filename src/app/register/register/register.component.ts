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
  reaptedPassword = false;
  changinClasses() {
    const controls = this.register.controls;
    for (let keys in controls) {
      if (controls[keys].value === '') {
        controls[keys].markAsPristine();
      }
    }
    if (this.reaptedPassword) {
      if (
        this.register.get('password')?.value !==
        this.register.get('repeatedPassword')?.value
      ) {
        this.register.get('repeatedPassword')?.markAsPristine();
      } else if (
        this.register.get('password')?.value ===
        this.register.get('repeatedPassword')?.value
      ) {
        this.reaptedPassword = false;
        this.register.get('repeatedPassword')?.markAsDirty();
      }
    }
  }
  onCreateAccount() {
    const controls = this.register.controls;
    let empty = 0;
    for (let keys in controls) {
      if (controls[keys].value === '') {
        empty++;
        controls[keys].markAsTouched();
      }
    }
    if (empty > 0) {
      return;
    }
    if (
      this.register.get('password')?.value !==
      this.register.get('repeatedPassword')?.value
    ) {
      this.register.get('repeatedPassword')?.markAsPristine();
      this.reaptedPassword = true;
      return;
    }

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
