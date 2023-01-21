import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./containers/users/users.component";
import {PostComponent} from "./containers/post/post.component";
import {DashboardComponent} from "./components/layout/dashboard/dashboard.component";

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    children : [
      {
        path : '', component : UsersComponent
      },
      {
        path: 'post', component : PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
