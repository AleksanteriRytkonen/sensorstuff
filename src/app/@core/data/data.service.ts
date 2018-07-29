import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { SensorData } from '../models/sensordata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:5000';
  tempsUrl = '/sensors/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getTemps(): Observable<SensorData[]> {
    return this.http.get<SensorData[]>(this.apiUrl + this.tempsUrl, this.httpOptions).pipe(
      /* tap(data => console.log(data)) */
    );
  }

}
