import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRowComponent } from './user-list/user-row/user-row.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: 'details',
    component: UserDetailsComponent
  },
  {
    path: 'row',
    component: UserRowComponent
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
