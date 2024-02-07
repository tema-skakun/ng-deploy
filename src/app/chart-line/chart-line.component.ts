import {Component} from '@angular/core';
import {BaseChartComponent} from "../base-chart/base-chart.component";

@Component({
  selector: 'app-chart-line',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrl: '../base-chart/base-chart.component.css'
})
export class ChartLineComponent extends BaseChartComponent {
  updateChart(): void {
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
          type: 'line',
          data: this.chartData.map(item => item.Freq)
        }
      ]
    };
  }
}
