import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ChartData} from "../chart.model";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // private backendUrl = 'http://localhost:3000/api/chart-data';
  private backendUrl = '../../assets/chart_data.json';

  constructor(private http: HttpClient) { }

  getChartData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>(this.backendUrl);
  }
}
