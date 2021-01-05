import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
    {
        path: '',
        component: UserViewComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserGridRoutingModule {}