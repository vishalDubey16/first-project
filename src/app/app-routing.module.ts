import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';



const routes: Routes = [
  
 { path: 'login', loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule) },
{ path: '', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
