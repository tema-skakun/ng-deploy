import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ts-frontend';
  selectedChartType: string | null = 'pie';
  chartTypes: string[] = ['pie', 'column', 'line', 'stack-bar'];
  selectChart(type: string) {
    this.selectedChartType = type;
  }
}
