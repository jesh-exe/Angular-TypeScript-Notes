import { Component, OnInit } from '@angular/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-top-downloads-bar',
  templateUrl: './top-downloads-bar.component.html',
  styleUrls: ['./top-downloads-bar.component.css']
})
export class TopDownloadsBarComponent implements OnInit {


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
      "name": "Prachi",
      "download": 1200
    },
    {
      "name": "Preet",
      "download": 900
    },
    {
      "name": "Palash",
      "download": 2550
    }
  ]

  constructor() {
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }

  ngOnInit() {
    this.echartsOptions = {
      color: ['green'],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      xAxis: {
        type: "value"

      },
      yAxis: {
        type: "category",
        data: this.data.map(data => data.name),
      },
      legend: {
        bottom: 0
      },
      series: [
        {
          name: "Download",
          type: "bar",
          data: this.data.map(data => data.download),
        },
      ]
    };
  }

}
