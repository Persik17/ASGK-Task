import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { LocalStorageService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: LocalStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storageService.getToken()) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
