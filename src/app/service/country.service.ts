import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = "http://localhost:8080/countries";

  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    })
};

  constructor(private http: HttpClient) { }

  //Método Observable listar country
  getCountry():Observable<Country[]>{
    return this.http.get<Country[]>(this.url);
  }

}
