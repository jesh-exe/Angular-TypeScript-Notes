import { Component, OnInit } from '@angular/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-top-uploads-bar',
  templateUrl: './top-uploads-bar.component.html',
  styleUrls: ['./top-uploads-bar.component.css']
})
export class TopUploadsBarComponent implements OnInit {

  readonly echartsExtentions: any[];
  echartsOptions = {};

  public data = [
    {
      "name" : "Jayesh",
      "upload" : 500
    },
    {
      "name" : "Supriya",
      "upload" : 800
    },
    {
      "name" : "Prachi",
      "upload" : 1200
    },
    {
      "name" : "Preet",
      "upload" : 700
    },
    {
      "name" : "Palash",
      "upload" : 550
    }
  ]

  constructor() {
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }

  ngOnInit() {
    this.echartsOptions = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        //  left: "3%",
        //  right: "4%",
        //  bottom: "8%",
        //  top: "3%",
        //  containLabel: true
      },
      xAxis: {
        type: "value"

      },
      yAxis: {
        type: "category",
        data: this.data.map(data => data.name),
        //  axisLabel: {
        //  interval: 0,
        //  rotate: 15
        //  }
      },
      legend: {
        bottom: 0
      },
      series: [
        {
          name: "Upload",
          type: "bar",  
          data: this.data.map(data => data.upload),
        },
      ]
    };
  }
}
