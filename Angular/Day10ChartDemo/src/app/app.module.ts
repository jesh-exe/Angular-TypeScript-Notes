import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgChartsAngularModule } from 'ag-charts-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { EchartsxModule } from 'echarts-for-angular';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [			
    AppComponent,
      BarChartComponent,
      PieChartComponent,
      LineChartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgChartsAngularModule,
    BrowserAnimationsModule,
    EchartsxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
