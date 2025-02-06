import { useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, ChartConfiguration, Filler, CategoryScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(LineController, LineElement, PointElement, LinearScale,CategoryScale, annotationPlugin, Filler,{
    id: 'dashedLines',
    beforeDraw: (chart) => {
      const { ctx, chartArea: { bottom }, scales: { x, y } } = chart;
      chart.data.datasets[0].data.forEach((value, index) => {
        if (typeof value === 'number') {
          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([5, 5]);
          const xPos = x.getPixelForValue(index);
          const yPos = y.getPixelForValue(value);
          if (typeof xPos === 'number' && typeof yPos === 'number') {
            ctx.moveTo(xPos, yPos);
            ctx.lineTo(xPos, bottom);
            ctx.strokeStyle = 'rgba(2, 150, 255, 0.5)';
            ctx.stroke();
          }
          ctx.restore();
        }
      });
    }
});

const Graph = () => {
  useEffect(() => {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
    const ctx = canvas?.getContext('2d');
    const date = [10, 15, 15, 15, 10];
    if (canvas && ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(1, 'rgba(32, 62, 103, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      const data = {
        labels: ['15.03', '16.03', '17.04', '18.04', '19.04'],
        datasets: [{
          label: 'Graph',
          data: date,
          borderColor: 'rgb(0, 106, 254)',
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }]
      };

      const config: ChartConfiguration<'line', number[], string> = {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
                type: 'category',
            },
            y: {
                display: false,
              }
          },
          plugins: {
            annotation: {
              annotations: {
                circle1: {
                  type: 'point',
                  xValue: '17.04',
                  yValue: date[2],
                  radius: 5,
                  backgroundColor: 'orange',
                  borderColor: 'orange'
                }
              }
            }
          }
        }
      };

      const chart = new Chart(canvas, config);

      return () => {
        chart.destroy();
      };
    } else {
      console.error('Canvas element not found');
    }
  }, []);

  return (
    <div className="graph">
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default Graph;