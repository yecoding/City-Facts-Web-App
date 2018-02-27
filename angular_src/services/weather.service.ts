import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http:Http) { }

  getWeather(term: string){

  	return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+term+'&APPID=504fb52df226d4b7e338e42f5df14c19&units=metric')
  	.map(response=>response.json());
  }  
}
