import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getToken() {
    return localStorage.getItem('token');
  }

  getLogin() {
    return localStorage.getItem('login');
  }

  clearStorage() {
    localStorage.clear();
  }
}
