import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const PageGraph = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'level of thiccness',
          data: [32, 64, 23, 15, 68],
          backgroundColor: ['rgba(73, 177, 60, 0.6)'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="product__bottom">
      <div className="product__graph">
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: 'Thiccness Scale', display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <div className="product__graph-info">
        <p>12 Month Historical</p>
        <p>
          # Of Sales <br /> <span>11102</span>
        </p>
        <p>
          Price Premium <br /> <span>61.2%</span>
        </p>
        <p>
          Average Sale Price <br /> <span>$248</span>
        </p>
      </div>
    </div>
  );
};

export default PageGraph;
