import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/sensors'; // Update the URL to your Spring Boot API

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  checkWaterDrinkability(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/check-water-drinkability`);
  }

  getDrinkabilityForecast(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/drinkability-forecast`);
  }
  
}
