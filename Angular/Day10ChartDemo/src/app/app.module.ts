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
import { TotalUsersPieComponent } from './total-users-pie/total-users-pie.component';
import { TotalStoragePieComponent } from './total-storage-pie/total-storage-pie.component';
import { TotalContainerPieComponent } from './total-container-pie/total-container-pie.component';
import { TopUploadsBarComponent } from './top-uploads-bar/top-uploads-bar.component';
import { TopDownloadsBarComponent } from './top-downloads-bar/top-downloads-bar.component';
import { UserChartsComponent } from './user-charts/user-charts.component';
import { RouterModule } from '@angular/router';
import { TimeSpentLineComponent } from './user-charts/time-spent-line/time-spent-line.component';
import { StorageChartComponent } from './user-charts/storage-chart/storage-chart.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CpuGuageComponent } from './performance/cpu-guage/cpu-guage.component';
import { StorageGuageComponent } from './performance/storage-guage/storage-guage.component';

@NgModule({
  declarations: [											
    AppComponent,
      BarChartComponent,
      PieChartComponent,
      LineChartComponent,
      TotalUsersPieComponent,
      TotalStoragePieComponent,
      TotalContainerPieComponent,
      TopUploadsBarComponent,
      TopDownloadsBarComponent,
      TimeSpentLineComponent,
      UserChartsComponent,
      StorageChartComponent,
      CpuGuageComponent,
      StorageGuageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgChartsAngularModule,
    BrowserAnimationsModule,
    EchartsxModule,
    RouterModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
