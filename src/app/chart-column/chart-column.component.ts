import {Component, OnInit} from '@angular/core';;
import {BaseChartComponent} from "../base-chart/base-chart.component";

@Component({
  selector: 'app-chart-column',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrl: '../base-chart/base-chart.component.css'
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
