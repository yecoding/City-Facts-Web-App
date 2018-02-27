import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import 'rxjs/Rx';

import { PopulationService } from '../services/population.service';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  	cityname: string;
    result_cityname: string ="Cities";
    // weather_show_cityname: string;

	  result_population: Response;
	  population: string ="Not Available";

    result_weather: any;
    temperature : number;
    weather_condition : string;

    location_lon : number;
    location_lat: number;



	constructor(private populationService: PopulationService, 
				private weatherService: WeatherService,
				private locationService: LocationService) {}


  	getData(){

      this.cityname = this.cityname.trim();
  		this.populationService.getPopulation(this.cityname)
  		.subscribe(result =>{
        console.log('AAAAAAAAA');
        console.log(result);
  			this.result_population = result;

        if(this.result_population.status == 200){

          var parseResult = JSON.parse(this.result_population['_body']);
          this.population = parseInt(parseResult.Population).toLocaleString();
          console.log(this.population); 
          this.result_cityname =  parseResult.Name;  
          console.log(this.result_cityname);  

        }else if(this.result_population.status == 204){
          this.population = 'Not Available';
          this.result_cityname = "Cities";
        }else{

        }

	
  		});

  		this.weatherService.getWeather(this.cityname)
  		.subscribe(result =>{
        this.result_weather = result;

        if (result != undefined){
          this.temperature = this.result_weather.main.temp;
          this.weather_condition = this.result_weather.weather[0].main;

          this.location_lon = this.result_weather.coord.lon;
          this.location_lat = this.result_weather.coord.lat;
        }

        // console.log(this.result_weather['main']);
        // console.log(this.result_weather['weather']);
        // console.log(this.result_weather['coord']);

  		}, 
      error=>{
          this.temperature = undefined;
          this.weather_condition = undefined;

          this.location_lon = undefined;
          this.location_lat = undefined;
      }
      )
  	}

}
