import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  login: string;
  token: string;

  constructor(
    private router: Router,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.login = this.storageService.getLogin();
    this.token = this.storageService.getToken();
  }

  logout() {
    this.storageService.clearStorage();
    this.router.navigate(['/login']);
  }
}
