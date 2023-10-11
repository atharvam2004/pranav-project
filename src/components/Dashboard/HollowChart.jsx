// import React from "react";
// import ReactApexChart from "react-apexcharts";
// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [44, 55, 13, 33],
//       options: {
//         chart: {
//           width: 380,
//           type: "donut",
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 show: false,
//               },
//             },
//           },
//         ],
//         legend: {
//           position: "right",
//           offsetY: 0,
//           height: 230,
//         },
//       },
//     };
//   }

//   appendData() {
//     var arr = this.state.series.slice();
//     arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

//     this.setState({
//       series: arr,
//     });
//   }

//   removeData() {
//     if (this.state.series.length === 1) return;

//     var arr = this.state.series.slice();
//     arr.pop();

//     this.setState({
//       series: arr,
//     });
//   }

//   randomize() {
//     this.setState({
//       series: this.state.series.map(function () {
//         return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//       }),
//     });
//   }

//   reset() {
//     this.setState({
//       series: [44, 55, 13, 33],
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div class="chart-wrap">
//           <h1>Top Products</h1>
//           <p>May - June 2021</p>
//           <div id="chart">
//             <ReactApexChart
//               options={this.state.options}
//               series={this.state.series}
//               type="donut"
//               width={380}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ApexChart;


import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../styles/Dashboard/BarChart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Badic Tees', 'Cutsom Short Pants', 'Super Hoodies'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(12, 214, 100, 1)',
        'rgba(238, 132, 132, 1)',
        'rgba(246, 220, 125, 1)',
      ],
      borderColor: [
        'rgba(12, 214, 100, 1)',
        'rgba(238, 132, 132, 1)',
        'rgba(246, 220, 125, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return <div className='pie-chart-main'>
    <div className='pie-chart-titles'>
    <h1>Top Products</h1>
    <p>May - June 2021</p>
    </div>
    <Doughnut className='chart-main' data={data} />;
    </div>
}