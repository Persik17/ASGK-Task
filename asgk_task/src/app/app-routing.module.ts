import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PassListComponent, LoginComponent, UserComponent } from './components';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'passes', component: PassListComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
