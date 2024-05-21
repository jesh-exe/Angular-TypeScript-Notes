import { Component, OnInit } from '@angular/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {

  echartsExtentions: any;
  echartsOptions = {};

  constructor() {
    this.echartsExtentions = [
      TooltipComponent,
      GridComponent,
      LegendComponent,
      BarChart
    ]
  }

  ngOnInit() {


    // JSON Object Data from the Backend
    const dataFromBackend =
    {
      // Top 10 Names of Users
      names: ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7', 'Name8', 'Name9', 'Name10',],
      // Data Related to Top 10 User names provided above, data must be in the same order as of the names provided
      chartData: [
        {
          //Name for the Type of Container
          type: "Notebook",  
          //Number of Containers running of 10 users of particular Category(Name) in same order as names array provided above.
          //Data Array size will always be equal to 10
          data: [100, 302, 301, 334, 390, 330, 320, 433, 234, 239]   
        },
        {
          type: "GUI",
          data: [320, 132, 101, 134, 90, 230, 210, 143, 234, 239]
        },
        {
          type: "BLAST",
          data: [220, 182, 191, 234, 290, 330, 310, 243, 234, 239]
        },
        {
          type: "Code",
          data: [150, 212, 201, 154, 190, 330, 410, 143, 234, 239]
        }
      ]
    }

    this.echartsOptions = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      legend: {
        // selectedMode: false
      },
      yAxis: {
        type: 'value'
      },
      xAxis: {
        type: 'category',
        data: dataFromBackend.names
      },
      series: dataFromBackend.chartData.map(val => {
        return {
          name: val.type,
          type: "bar",
          stack: "total",
          data: val.data
        }
      })

    };



  }
}
