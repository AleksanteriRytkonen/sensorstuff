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
export class AppComponent {
  
}
