import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { DataService } from './@core/data/data.service';
import { SensorData } from './@core/models/sensordata';
import { interval }from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
Tomorow, first of all fix database
second, fix layout
third add some sort of meters (maybe cirlce or w/e) to display highest and lowest ever temps
add date filtering
make this thing work on raspi... :P
*/
export class AppComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  temps$ = this.dataService.getTemps();
  halo = 'moi';
  
  public lineChartData = [];
  public lineChartLabels = [];
  public type = 'line';

  appLoaded = false;

  pagingThing;

  constructor(private dataService: DataService) {
  }

  ngOnInit(){
    this.getTemps();
  }

  getTemps() {
    this.dataService.getTemps().subscribe((data: SensorData[]) => {
      console.log(data);
    });
  }

  ngAfterViewInit() {
  }

  updateTemps() {
  }
  ngOnChanges() {
  }

/*   getTemps() {
    this.dataService.getTemps().subscribe((data: Temperature[]) => {
      const chartData = [];
      data.forEach(temp => {
        chartData.push(temp.celsius);
        this.lineChartLabels.push(temp.time);
      });
      this.lineChartData.push({data: chartData});
    }, error => {}, () => {
      this.appLoaded = true;
    });
  } */

  ngOnDestroy() {
  }
}
