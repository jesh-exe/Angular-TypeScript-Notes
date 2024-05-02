import { Component } from '@angular/core';
import { AgCategoryAxisOptions, AgNumberAxisOptions, AgChartOptions, PixelSize, AgBarSeriesOptions, AgLineSeriesOptions } from "ag-charts-community"


interface IData {
  month: string,
  avgTemp: number,
  iceCreamSales: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public chartOptions: AgChartOptions;
  title = 'Day10-ChartsDemo';

  constructor() {
    this.chartOptions = {
      title: {
        text: "Ice Cream Sales"
      },
      height: 500 as PixelSize,
      width: 1000 as PixelSize,
      data: [
        { month: "JAN", avgTemp: 2.3, iceCreamSales: 162000 },
        { month: "FEB", avgTemp: 5.7, iceCreamSales: 106000 },
        { month: "APR", avgTemp: 4.3, iceCreamSales: 146500 },
        { month: "MAY", avgTemp: 8.9, iceCreamSales: 192000 },
        { month: "JUN", avgTemp: 4.0, iceCreamSales: 152000 },
        { month: "JUL", avgTemp: 7.76, iceCreamSales: 170000 },
      ] as IData[],
      series: [
        {
          type: "line",
          xKey: "month",
          yKey: "iceCreamSales",
          yName: "Ice Cream Sales",
          // stroke : "green",
          // label: {
          //   enabled: true,
          //   fontWeight: 'bold',
          //   fontSize : 10
          // },
          marker: {
            // fill: 'green',
            // size: 10,
            // stroke: 'black',
            // strokeWidth: 3,
            // shape: 'diamond',
          },

        } as AgLineSeriesOptions,
        {
          type: "line",
          xKey: "month",
          yKey: "avgTemp",
          yName: "Average Temprature",
        } as AgLineSeriesOptions,
      ],
      axes: [
        {
          position: "bottom",
          type: "category"
        } as AgCategoryAxisOptions,
        {
          position: "left",
          type: "number",
          keys: ['iceCreamSales']
        } as AgNumberAxisOptions,
        {
          position: "right",
          type: "number",
          keys: ['avgTemp']
        }
      ]
    }
  }
}
