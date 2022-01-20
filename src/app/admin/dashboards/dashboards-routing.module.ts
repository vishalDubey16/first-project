import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [

  {
      path: '',
      component: DashboardComponent,
      children: [
          { path: '', redirectTo:'index', pathMatch: 'full'},
          { path: 'index', component: IndexComponent, data: { title: ':: Aero Angular :: Dashboard ::' }},
          { path: 'form', component: FormComponent, data: { title: ':: Aero Angular :: Profile ::' }},
          {
            path: 'form-list',
            component : FormListComponent
          },
          {
            path : 'edit-form/:id',
            component : FormEditComponent
          },
          {
            path : 'profile/:id',
            component : ProfileComponent
          },
          {
            path : 'user-table',
            component : UsersTableComponent
          },
          {
            path : 'notification',
            component : NotificationComponent

          },
          {
            path : 'project-list',
            component : ProjectListComponent
          }

        
      ]
  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
