import {BackendService} from "../services/backend.service";
import {ChartData} from "../chart.model";
import {EChartsOption} from "echarts";
import {Directive, OnInit} from "@angular/core";

@Directive()
export abstract class BaseChartComponent implements OnInit {
  currentFilter: { letter?: string; freq?: number } = {};

  chartData: ChartData[] = [];
  originalData: ChartData[] = [];
  chartOptions: EChartsOption = {};

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.loadData();
    setInterval(() => this.loadData(), 1000);
  }

  loadData() {
    this.backendService.getChartData().subscribe(data => {
      this.originalData = data;
      this.applyFilter();
    });
  }

  filterByLetter(letter: string) {
    this.currentFilter = { letter };
    this.applyFilter();
  }

  filterByFreq(freq: number) {
    this.currentFilter = { freq };
    this.applyFilter();
  }

  resetFilter() {
    this.currentFilter = {};
    this.applyFilter();
  }

  applyFilter() {
    let filteredData = this.originalData;

    if (this.currentFilter.letter) {
      filteredData = filteredData.filter(item => item.Letter === this.currentFilter.letter);
    }

    if (this.currentFilter.freq) {
      filteredData = filteredData.filter(item => item.Freq === this.currentFilter.freq);
    }

    this.chartData = filteredData;
    this.updateChart();
  }

  abstract updateChart(): void;
}
