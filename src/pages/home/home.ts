import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOutline: boolean = true;
  /*
   * Syntax for ngClass for conditional class application:
   * {'classname1':condition1,
   *  'classname2':condition2,
   *  'classname3':condition3
   * }
   */

  cities: any[];
  modifiedCities: any[];
  totalPopulation = 0;

  constructor(public navCtrl: NavController) {
    this.cities = [
      {city: "London", nation: "UK", population: 8615246, picture:'http://via.placeholder.com/60'},
      {city: "Berlin", nation: "Germany", population: 3517424, picture:'http://via.placeholder.com/60'},
      {city: "Madrid", nation: "Spain", population: 3166235, picture:'http://via.placeholder.com/60'},
      {city: "Rome", nation: "Italy", population: 2873598, picture:'http://via.placeholder.com/60'},
      {city: "Paris", nation: "France", population: 2273305, picture:'http://via.placeholder.com/60'},
      {city: "Bucarest", nation: "Romania", population: 2103346, picture:'http://via.placeholder.com/60'},
      {city: "Wien", nation: "Austria", population: 1848656, picture:'http://via.placeholder.com/60'}
    ]

    this.modifiedCities = JSON.parse(JSON.stringify(this.cities));
  }

  clickTestButton() {
    this.isOutline = !this.isOutline;
  }

  resetData() {
    this.modifiedCities = JSON.parse(JSON.stringify(this.cities));
    this.totalPopulation = 0;
  }

  filterData() {
    this.modifiedCities = this.modifiedCities.filter((city) => {
      return city.population > 3000000;
    });
  }

  mapData() {
    this.modifiedCities = this.modifiedCities.map((city) => {
      let newPopulation = city.population + 1000000;
      city.population = newPopulation;
      city.city = city.city.toUpperCase();
      return city;
    });
  }

  reduceData() {
    this.totalPopulation = this.modifiedCities.reduce((previous, current) => {
      let prevResult = Number.isInteger(previous) ? previous : previous.population;
      return prevResult + current.population;
    });
  }
}
