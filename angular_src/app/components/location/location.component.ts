import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  	@Input() location_lon: any;
  	@Input() location_lat: any;
  	@Input() cityname: string;

  ngOnInit() {
  }

}
