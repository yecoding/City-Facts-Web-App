import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { PopulationComponent } from './components/population/population.component';
import { WeatherComponent } from './components/weather/weather.component';
import { LocationComponent } from './components/location/location.component';

import { PopulationService } from '../services/population.service';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';




@NgModule({
  declarations: [
    AppComponent,
    PopulationComponent,
    WeatherComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [PopulationService, WeatherService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
