import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  
 { path: 'login', loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule) },
{ path: '', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
{
  path : '**',
  component : PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
