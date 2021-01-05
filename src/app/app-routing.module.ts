import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserGridConfiguration } from './user-grid/models/configurations/user-grid-configuration';

// Test
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./user-grid/user-grid.module').then(m => m.UserGridModule.forRoot(
      new UserGridConfiguration(
        environment.apiUrl,
        'api/player',
        'api/someData'
      )
    )),
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
