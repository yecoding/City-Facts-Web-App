import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PopulationService {

  constructor(private http:Http) { }
  
  	getPopulation(term: string){
  	return this.http.get('http://ec2-35-183-18-67.ca-central-1.compute.amazonaws.com/cities/population/?name=' + term)

  }

}
