import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LocalStorageService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isLoggedIn = this.storageService.getToken();

    if (isLoggedIn) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: this.storageService.getToken(),
        },
      });
    }

    return next.handle(req);
  }
}
