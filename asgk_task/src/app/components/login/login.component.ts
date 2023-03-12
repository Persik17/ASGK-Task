import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models';

import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLogin(loginForm: NgForm) {
    this.authService
      .authenticate(loginForm.value)
      .subscribe((response: User) => {
        if (response) {
          localStorage.setItem('login', loginForm.value.login);
          localStorage.setItem('token', response.auth_token);
          this.router.navigate(['user']);
        }
      });
  }
}
