import {Component} from '@angular/core';
import {BaseChartComponent} from "../base-chart/base-chart.component";

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.css'
})
export class ChartPieComponent extends BaseChartComponent {
   updateChart() {

    this.chartOptions = {
      series: [
        {
          type: 'pie',
          data: this.chartData.map(item => ({ value: item.Freq, name: item.Letter })),
        }
      ]
    };
  }
}
