import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from 'src/environments/environment';
import {UserGridConfiguration} from './user-grid/models/configurations/user-grid-configuration';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuardService} from './helper/auth-guard.service';
import {ProfileComponent} from './user/profile/profile.component';

// Test
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'main', component: ProfileComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: () => import('./user-grid/user-grid.module').then(m => m.UserGridModule.forRoot(
      new UserGridConfiguration(
        environment.apiUrl,
        'api/player',
        'api/someData'
      )
    )),
    canActivate: [AuthGuardService]
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
