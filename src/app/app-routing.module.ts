import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FiltersComponent} from './filters/filters/filters.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CurriculumComponent} from './curriculum/curriculum/curriculum.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './backend/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login',
    redirectTo: 'login/',
    pathMatch: 'full'
  },
  {
    path: 'login/:token',
    component: LoginComponent
  },
  {
    path: 'filters',
    component: FiltersComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'curriculum',
    component: CurriculumComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
