import { Component, OnInit } from '@angular/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-time-spent-line',
  templateUrl: './time-spent-line.component.html',
  styleUrls: ['./time-spent-line.component.css']
})
export class TimeSpentLineComponent implements OnInit {
  readonly echartsExtentions: any[];
  echartsOptions = {};

  public data = [
    {
      "name": "Jayesh",
      "download": 1500
    },
    {
      "name": "Supriya",
      "download": 2800
    },
    {
      "name": "Arpit",
      "download": 1200
    },
    {
      "name": "Tushar",
      "download": 900
    },
    {
      "name": "Kallu",
      "download": 2550
    }
  ]

  constructor() {
    this.echartsExtentions = [LineChart, TooltipComponent, GridComponent, LegendComponent];
  }

  ngOnInit() {
    this.echartsOptions = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      xAxis: {
        type: 'category',
        data: ['10-May', '11-May', '12-May', '13-May', '14-May', '15-May', '16-May']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
  }

}
