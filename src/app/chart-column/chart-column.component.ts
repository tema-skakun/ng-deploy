import {Component, OnInit} from '@angular/core';
import {ChartData} from "../chart.model";
import {EChartsOption} from "echarts";
import {BackendService} from "../services/backend.service";
import {BaseChartComponent} from "../base-chart/base-chart.component";

@Component({
  selector: 'app-chart-column',
  templateUrl: './chart-column.component.html',
  styleUrl: './chart-column.component.css'
})
export class ChartColumnComponent extends BaseChartComponent {
  updateChart() {
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: this.chartData.map(item => item.Letter)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Frequency',
          type: 'bar',
          data: this.chartData.map(item => item.Freq)
        }
      ]
    };
  }
}
