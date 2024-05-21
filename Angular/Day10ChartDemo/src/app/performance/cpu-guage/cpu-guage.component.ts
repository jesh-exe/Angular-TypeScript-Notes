import { Component, OnInit } from '@angular/core';
import { GaugeChart, GaugeSeriesOption } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { type } from 'os';

@Component({
  selector: 'app-cpu-guage',
  templateUrl: './cpu-guage.component.html',
  styleUrls: ['./cpu-guage.component.css']
})
export class CpuGuageComponent implements OnInit {

  echartExtensions: any[];
  echartsOptions = {}

  private value:number = 60

  constructor() {
    this.echartExtensions = [TooltipComponent,
      LegendComponent,
      GaugeChart,
      GridComponent
    ]
  }

  ngOnInit() {
    this.echartsOptions = {
      series: [
        {
          type: 'gauge',
          radius:"55%",
          center: ['50%', '30%'],
          axisLine: {
            lineStyle: {
              width: 10,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            },
            width : 3,
            length: 50
          },
          axisTick: {
            distance: -4,
            length: 4,
            lineStyle: {
              color: '#fff',
              width: 1
            }
          },
          splitLine: {
            show : false,
            distance: -50,
            length: 30,
            fontSize:5,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 0,
            // width : 10
          },
          detail: {
            fontSize:14,
            valueAnimation: true,
            formatter: '{value}%',
            color: 'inherit'
          },
          data: [
            {
              value: this.value
            }
          ]
        }
      ]
    };
  }

}
