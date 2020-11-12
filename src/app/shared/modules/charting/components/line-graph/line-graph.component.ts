import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import * as echarts from 'echarts';
import { ChartDataPoint } from '../../models/chart-data-point';

@Component({
  selector: 'line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  @Input() chartId: string;
  @Input() yAxisLabel: string;
  @Input() xAxisLabel: string;
  @Input() seriesTitle: string;
  @Input() title: string;
  @Input() colors: string[];
  @Input() data: ChartDataPoint[];

  spinnerIsDeterminate = false;
  spinnerProgress = 25;
  spinnerColor = 'blue';
  spinnerDiameter = 50;
  spinnerHasChannel = true;
  spinnerCentered = true;

  public myChart: any;

  constructor() { }

  ngOnInit() {  }

  ngOnChanges() {
    if (document.getElementById(this.chartId)) {
      this.renderChart();
    }
  }

  ngAfterViewInit(): void {
    if (document.getElementById(this.chartId)) {
      this.renderChart();
    }
  }

  renderChart() {
    const chartElement = document.getElementById(this.chartId);
    if (this.data && chartElement) {
      this.myChart = echarts.init(chartElement);
      const dates = []
      const yValues = []

      this.data.forEach(obj => {
        dates.push(obj.value[0]);
        yValues.push(obj.value[1]);
      });

      const moments = dates.map(d => moment(d));
      const xMax = moment.max(moments).add(6, 'hours');
      const xMin = moment.min(moments).subtract(6, 'hours');
      const yMax = Math.ceil(Math.max(...yValues));

      const option = {
        title: {
          text: this.title,
          padding: [10, 0, 0, 20]
        },
        legend: {
          data: [this.seriesTitle],
          bottom: 10
        },
        xAxis: {
          type: 'time',
          min: new Date(xMin.toString()),
          max: new Date(xMax.toString()),
          axisLabel: {
            formatter: (value) => {
              // const formatted = moment(value).format('MM/DD/YYYY[\n]HH:mm')
              // formatted.split('\n')
              const formatted = moment(value).format('MM/DD/YYYY')
              return formatted;
            },
            interval: (index, value) => {
              return value;
            }
          },
          splitLine: {
              show: false
          }
        },
        grid: {
          left: 75,
          top: 50,
          right: 35,
          bottom: 65
        },
        yAxis: [
          {
            name: this.seriesTitle,
            nameTextStyle: {
                fontWeight: 600
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
              }
            },
            // interval: 0.5,
            nameLocation: 'middle',
            max: yMax,
            nameGap: 30,
            type: 'value'
          },
        ],
        tooltip: {
          trigger: 'item',
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
          padding: 15,
          textStyle: {
            color: 'black'
          },
          formatter: (params) => {
            let tooltip = '';
            if (params.seriesName === 'Procedure' || params.seriesName === 'Bed Rest Activity') {
              tooltip = '<strong>' + params.name + '</strong>' + '<br />' + '(' + moment(params.value[0]).format('MM/DD/YYYY HH:mm') + ')';
            } else {
              tooltip = '<strong>' + params.seriesName + ':  ' + params.value[1] + '</strong>' + '<br />' + '(' + moment(params.value[0]).format('MM/DD/YYYY HH:mm') + ')';
            }

            return tooltip;
          }
        },
        series: [
          {
            name: this.seriesTitle,
            data: this.data,
            type: 'line',
            symbol: 'circle',
            yAxisIndex: 0,
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: this.colors[0]
                }
            },
            itemStyle: {
                normal: {
                    color: this.colors[0],
                    borderWidth: 2,
                    borderColor: 'white'
                }
            },
          },
        ]
      };

      this.myChart.setOption(option);
    }

  }
}
