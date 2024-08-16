import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './barchart.css';

const Barchart = () => {
  const colors = ['#004651', '#004651',  '#0C9B3D', '#0C9B3D', '#0C9B3D', '#A4E473', '#A4E473'];

  useEffect(() => {
    var options = {
      series: [{
        data: [22, 22, 22, 21, 21, 21,  20]
      }],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            console.log(chart, w, e)
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '70%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          // ['John', 'Doe'],
          // ['Joe', 'Smith'],
          // ['Jake', 'Williams'],
         
          // ['Peter', 'Brown'],
          // ['Mary', 'Evans'],
          // ['David', 'Wilson'],
          // ['Lily', 'Roberts'],
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup on unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='barChart_container'>
      <div id="chart"></div>
    </div>
  );
};

export default Barchart;
