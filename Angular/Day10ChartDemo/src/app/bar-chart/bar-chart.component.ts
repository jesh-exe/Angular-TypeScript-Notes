import { Component, OnInit } from "@angular/core";
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],

})
export class BarChartComponent implements OnInit {

  readonly echartsExtentions: any[];
  echartsOptions = {};

  public data = [
    {
      "week": "Mon",
      "ali" : 10,
      "behrouz" : 1
    },
    {
      "week": "Tue",
      "ali" : 20,
      "behrouz" : 17
    },
    {
      "week": "Wed",
      "ali" : 18,
      "behrouz" : 12
    },
    {
      "week": "Thur",
      "ali" : 32,
      "behrouz" : 11
    },
    {
      "week": "Fri",
      "ali" : 9,
      "behrouz" : 40
    },
    {
      "week": "Sat",
      "ali" : 25,
      "behrouz" : 3
    },
    {
      "week": "Sun",
      "ali" : 15,
      "behrouz" : 21
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
        //  left: "3%",
        //  right: "4%",
        //  bottom: "8%",
        //  top: "3%",
        //  containLabel: true
      },
      yAxis: {
        type: "value"
      },
      xAxis: {
        type: "category",
        data: this.data.map(data => data.week),
        //  axisLabel: {
        //  interval: 0,
        //  rotate: 15
        //  }
      },
      legend: {
        data: ["ali", "behrooz"],
        bottom: 0
      },
      series: [
        {
          name: "ali",
          type: "bar",
          data: this.data.map(data => data.ali),
        },
        {
          name: "behrooz",
          type: "bar",
          // data: [1, 17, 12, 11, 40, 3, 21]
          data : this.data.map(data => data.behrouz)
        }
      ]
    };
  }
}