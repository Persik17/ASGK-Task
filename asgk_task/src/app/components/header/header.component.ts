import { Component } from '@angular/core';

import { LocalStorageService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  loggedInUser: string;

  constructor(private storageService: LocalStorageService) {}

  loggedIn() {
    this.loggedInUser = this.storageService.getLogin();
    return this.loggedInUser;
  }
}
