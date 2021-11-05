import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

country : Country;
countries : Country[] = [];
  
  constructor(private countryService: CountryService, private _router: Router) { 
    this.country = new Country();
  }

  ngOnInit(): void {
    this.listarCountry();
  }

  public listarCountry(){
    this.countryService.getCountry().subscribe (res =>{
      this.countries = res;
      console.log(this.country.name);
    });
  }


}
