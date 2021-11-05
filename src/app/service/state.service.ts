import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../model/state';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  
  private URL = "http://localhost:8080/states";

  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    })
};
  
  constructor(private http: HttpClient) {
   }

   getStates():Observable<State[]>{
     return this.http.get<State[]>(this.URL);
   }
}
