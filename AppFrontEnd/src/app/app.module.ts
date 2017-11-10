import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MakeService } from './services/make.service';
import { HttpModule } from '@angular/http';
import { FeatureService } from './services/feature.service';


@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    MakeService,
    FeatureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
