import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  @Input() cityname: string =" ";
  @Input() weather_main: string =" ";
  @Input() weather_temp: string =" ";

  ngOnInit() {
  }

}
