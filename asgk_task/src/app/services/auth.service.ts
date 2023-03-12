import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

import { environment } from 'src/environments/environment';

import { LocalStorageService } from '.';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly testUrl = environment.testUrl;

  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {}

  authenticate(user: User) {
    return this.http.post<User>(this.testUrl, user);
  }

  isLogin() {
    return this.storageService.getToken();
  }

  logout() {
    this.storageService.clearStorage();
  }
}
