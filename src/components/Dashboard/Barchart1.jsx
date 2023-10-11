import React, { Component } from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-datalabels';
import jsonfile from 'jsonfile';

class TwoSidedBarChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    jsonfile.readFile('data.json', (err, data) => {
      if (err) {
        console.error('Error reading JSON file: ', err);
        return;
      }

      this.createChart(data);
    });
  }

  createChart(data) {
    const ctx = this.chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Data Set 1',
            data: data.data1,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Data Set 2',
            data: data.data2,
            backgroundColor: 'rgba(192, 75, 75, 0.5)',
            borderColor: 'rgba(192, 75, 75, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
          },
        },
      },
    });
  }

  render() {
    return (
      <div className="two-sided-bar-chart">
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default TwoSidedBarChart;
