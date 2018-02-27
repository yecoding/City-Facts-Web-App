import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  	@Input() cityname: string =" ";
    @Input() population: string =" ";

}
