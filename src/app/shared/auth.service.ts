import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logedIn = new Subject<void>();
  isProceing = false;
  bookMarkedMovies: any = {};
  notBookMarkedMovies: any = {};
  gettingLocalStoreg(key: string) {
    return localStorage.getItem(key);
  }
  settingLocalStoreg(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  deletingLocalStoreg(key: string) {
    localStorage.removeItem(key);
  }
  constructor() {}
}
