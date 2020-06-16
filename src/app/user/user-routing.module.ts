import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from '../Shared/services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [{
      path: '',
      canActivate: [AuthGuard],
      component: UserListComponent,
    },
    {
      path: 'list',
      canActivate: [AuthGuard],
      component: UserListComponent,
    },
    {
      path: 'detail',
      canActivate: [AuthGuard],
      component: UserDetailComponent,
    }
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
