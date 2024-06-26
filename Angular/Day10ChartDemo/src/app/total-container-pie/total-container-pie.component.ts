import { Component, OnInit } from '@angular/core';
import { PieChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-total-container-pie',
  templateUrl: './total-container-pie.component.html',
  styleUrls: ['./total-container-pie.component.css']
})
export class TotalContainerPieComponent implements OnInit {

  echartExtensions: any[]
  echartsOptions = {}

  constructor() {
    this.echartExtensions = [
      TooltipComponent,
      LegendComponent,
      PieChart,
      GridComponent
    ]
  }

  ngOnInit() {
    this.echartsOptions = {
      grid: {
        left: 10,
        right: '55%',
        top: 'center',
        bottom: 10,
        containLabel: true
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        top: 'center',
      },
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      series: [
        {
          type: 'pie',
          radius: ['35%', '70%'],
          center: ['85%', '50%'],
          label: {
            show: false
          },
          data: [
            { value: 11, name: 'Running' },
            { value: 34, name: 'Stopped' },
          ]
        }
      ]
    };
  }
}
