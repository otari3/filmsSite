import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const registergourdGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.gettingLocalStoreg('token')) {
    return true;
  } else {
    return router.navigate(['/login']);
  }
};
