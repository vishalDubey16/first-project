import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HighlightDirective } from './_helper/highlight.directive';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortingPipe } from './_helper/sorting.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { UsersTableComponent } from './components/users-table/users-table.component';




@NgModule({
  declarations: [DashboardComponent, IndexComponent,FormComponent,  HighlightDirective, FormEditComponent,FormListComponent, SortingPipe, ProfileComponent, LoginComponent, UsersTableComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
   
  ],
  providers:[

  ]
})
export class DashboardsModule { }
