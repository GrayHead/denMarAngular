import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {FullUserComponent} from './full-user/full-user.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [/* /users/1000*/ {path: ':id', component: FullUserComponent}]
  },
  {path: 'all-users', redirectTo: 'users', pathMatch: 'full'},
  {path: 'posts', loadChildren: () => import('./post-module/post.module').then(m => m.PostModule)}
];

// const routes2: Routes = [
//   {
//     path: 'users', component: UsersComponent,
//     children: [/* /users/1000*/ {path: ':id', component: FullUserComponent}]
//   },
//   {path: 'all-users', redirectTo: 'users', pathMatch: 'full'}
// ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
