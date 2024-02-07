import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { BackendService } from './services/backend.service';
import {ChartPieComponent} from "./chart-pie/chart-pie.component";
import {ChartColumnComponent} from "./chart-column/chart-column.component";
import {ChartLineComponent} from "./chart-line/chart-line.component";
import {ChartStackBarComponent} from "./chart-stack-bar/chart-stack-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    ChartPieComponent,
    ChartColumnComponent,
    ChartLineComponent,
    ChartStackBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
