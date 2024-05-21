import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageChartComponent } from './user-charts/storage-chart/storage-chart.component';
import { TimeSpentLineComponent } from './user-charts/time-spent-line/time-spent-line.component';


const routes: Routes = [
  {
    path: "storage",
    component: StorageChartComponent
  },
  {
    path: "container",
    component: TimeSpentLineComponent
  },
  {
    path: "time",
    component: TimeSpentLineComponent
  },
  {
    path: "activity",
    component: TimeSpentLineComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
