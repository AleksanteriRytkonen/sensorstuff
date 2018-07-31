import { Component, OnInit } from '@angular/core';
import { DataService } from '../../@core/data/data.service';
import { SensorData } from '../../@core/models/sensordata';
import * as moment from 'moment';
import { TemperatureModel } from '../../@core/models/temperature';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datasets: SensorData[] = [];
  temperatureDataset = [];
  temperatureColors = [
    {
      backgroundColor: 'rgb(224, 110, 17)'
    }
  ];
  moistureDataset = [];
  moistureColors = [
    { 
      backgroundColor: 'rgb(36, 6, 102)' 
    }
  ];
  lightDataset = [];
  lightColors = [
    { 
      backgroundColor: 'rgb(249, 255, 99)'
    }
  ];
  labels = [];
  dataLoaded: boolean = false;
  isWateringRequired: boolean = false;
  maxMinAvg;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTemps();
  }

  getTemps() {
    const temps = [];
    const moistures = [];
    const lights = [];
    this.dataService.getTemps().subscribe((data: SensorData[]) => {
      data['data'].forEach(d => {
        temps.push(d.temperature);
        moistures.push(d.moisture);
        lights.push(d.lightness);
        this.labels.push(moment(d.date).format('DD.MM HH:mm:ss'));
      });
    }, error => {
      console.log(error);
    }, () => {
      this.temperatureDataset.push(this.chartDatasetGenerator(temps, 'Temperature'));
      this.moistureDataset.push(this.chartDatasetGenerator(moistures, 'Moisture'));
      this.lightDataset.push(this.chartDatasetGenerator(lights, 'Lights')); 
      this.maxMinAvg = this.filterHighAvgLow(this.temperatureDataset[0].data);
      this.isWateringRequired = this.doPlantsNeedWatering(moistures[moistures.length - 1]);

      this.dataLoaded = true;
    });
  }

  filterHighAvgLow(tempValues: number[]): {} {
    const tempModel: TemperatureModel = new TemperatureModel();
    tempModel.max = Math.max(...tempValues);
    tempModel.min = Math.min(...tempValues);
    tempModel.avg = (tempModel.max + tempModel.min) / 2; 
    const minMaxAvg = [
      { data: [tempModel.min], label: 'Min' },
      { data: [tempModel.avg.toFixed(2)], label: 'Avg' },
      { data: [tempModel.max], label: 'Max' }
    ];
    return minMaxAvg;
  }

  chartDatasetGenerator(data: number[], label: string): {} {
    const chart = {
      data: data,
      label: label
    }
    return chart;
  }

  doPlantsNeedWatering(lastValue: number): boolean {
    return lastValue > 900 ? true : false;
  }


}
