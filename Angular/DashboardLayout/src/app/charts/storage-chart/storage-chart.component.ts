import { Component, OnInit } from '@angular/core';
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";


@Component({
  selector: 'app-storage-chart',
  templateUrl: './storage-chart.component.html',
  styleUrls: ['./storage-chart.component.css']
})
export class StorageChartComponent implements OnInit {


  readonly echartsExtentions: any[];
  echartsOptions = {};

  public data = [
    {
      "date": "12/10",
      "storageUsed" : 10,
    },
    {
      "date": "13/10",
      "storageUsed" : 20,
    },
    {
      "date": "14/10",
      "storageUsed" : 18,
    },
    {
      "date": "15/10",
      "storageUsed" : 32,
    },
    {
      "date": "16/10",
      "storageUsed" : 9,
    },
    {
      "date": "17/10",
      "storageUsed" : 25,
    },
    {
      "date": "18/10",
      "storageUsed" : 15,
    },
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
         left: "4%",
         right: "4%",
         bottom: "8%",
         top: "3%",
         containLabel: true
      },
      yAxis: {
        type: "value"
      },
      xAxis: {
        type: "category",
        data: this.data.map(data => data.date),

      },
      // legend: {
      //   data: ["ali"],
      //   bottom: 0
      // },
      series: [
        {
          name: "Jayesh",
          type: "bar",
          data: this.data.map(data => data.storageUsed),
          barWidth: '40%',
        }
      ]
    };
  }
}
