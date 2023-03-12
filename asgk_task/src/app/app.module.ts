import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  LoginComponent,
  HeaderComponent,
  UserComponent,
  PassListComponent,
  PassComponent,
} from './components';

import { AuthGuard } from './guards/auth.guard';

import { AuthInterceptor } from './helpers/auth-interceptor';

import { SearchPipe, SortPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PassListComponent,
    PassComponent,
    HeaderComponent,
    UserComponent,
    SearchPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
