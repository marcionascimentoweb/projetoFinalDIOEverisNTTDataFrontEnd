import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city : City | undefined;
  cities : City[] = [];


  constructor(private cityService : CityService) {
    this.city = new City();
   }

  ngOnInit(): void {
    this.listarCity();
  }

  public listarCity() {
    this.cityService.getCities().subscribe(res => {
      this.cities = res;
    });
  }

}
