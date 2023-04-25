import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiService } from '../../services/api.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Temperature (°C)'},
    { data: [], label: 'EC Value' },
    { data: [], label: 'Turbidity' },
  ];

  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
    },
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];

sensorData: any = null;
drinkability: string = '';
drinkabilityForecast: number = 0;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadSensorData();
    //this.checkWaterDrinkability();
    this.getDrinkabilityForecast();
    this.getSensorDataHistory();
  }

  loadSensorData(): void {
    this.apiService.getSensorData().subscribe(data => {
      this.sensorData = data;
    });
  }

  // checkWaterDrinkability(): void {
  //   this.apiService.checkWaterDrinkability().subscribe(response => {
  //     this.drinkability = response;
  //   });
  // }

  getDrinkabilityForecast(): void {
    this.apiService.getDrinkabilityForecast().subscribe(response => {
      this.drinkabilityForecast = response;
    });
  }

  getSensorDataHistory(): void {
  
  const temperatureData: number[] = [];
  const ecValueData: number[] = [];
  const turbidityData: number[] = [];

  for (let i = 0; i < 10; i++) {
    temperatureData.push(Math.random() * 50);
    ecValueData.push(Math.random());
    turbidityData.push(Math.random() * 5);
    this.lineChartLabels.push(`Point ${i + 1}`);
  }

  this.lineChartData = [
    { data: temperatureData, label: 'Temperature (°C)' },
    { data: ecValueData, label: 'EC Value' },
    { data: turbidityData, label: 'Turbidity' },
  ];
  }
}