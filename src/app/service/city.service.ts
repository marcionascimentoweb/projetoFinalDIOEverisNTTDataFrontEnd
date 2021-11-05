import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private URL = "http://localhost:8080/cities";
  
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    })
};
    constructor(private http: HttpClient) { }

    getCities():Observable<City[]>{
     return this.http.get<City[]>(this.URL);
   }

  }