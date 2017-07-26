import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { CubiclesComponent }      from './cubicles.component';
import { CubicleDetailComponent }  from './cubicle-detail.component';
import { CubicleReserveComponent } from './cubicle-reserve.component';

//Used to navigate to the different components of the app
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: CubicleDetailComponent },
  { path: 'cubicles',   component: CubiclesComponent },
  { path: 'reserve/:id', component: CubicleReserveComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
