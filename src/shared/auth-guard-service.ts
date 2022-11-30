import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean {
    let token = localStorage.getItem("pi_ajuda_me_access_token");

    if (!token) {
      this.router.navigate(['/homepage']);
      return false;
    }
    return true;
  }
}
