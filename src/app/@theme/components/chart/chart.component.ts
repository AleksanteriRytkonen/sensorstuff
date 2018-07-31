import { Component, OnInit, Input } from '@angular/core';
import { SensorData } from '../../../@core/models/sensordata';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() datasets: SensorData[];
  @Input() chartType = 'line';
  @Input() labels = [];
  @Input() options = {};
  @Input() colors: any[] = [];

  ngOnInit(): void {
  }
}
