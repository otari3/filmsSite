import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpMetodService } from '../../shared/http-metod-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private http: HttpMetodService) {}
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
      .subscribe((data) => {
        console.log(data);
      });
  }
}
