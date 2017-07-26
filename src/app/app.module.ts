import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { InMemoryWebApiModule } from '@angular/in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { CubicleDetailComponent }  from './cubicle-detail.component';
import { CubiclesComponent }      from './cubicles.component';
import { CubicleService }       from './cubicle.service';

import { AppRoutingModule }     from './app-routing.module';
import { CubicleReserveComponent } from './cubicle-reserve.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CubicleDetailComponent,
    CubiclesComponent,
    CubicleReserveComponent
  ],
  providers: [ CubicleService, DashboardComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
