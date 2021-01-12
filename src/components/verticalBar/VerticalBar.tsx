import React from 'react';
import { Bar } from '@reactchartjs/react-chart.js';

interface IProps {
  voteData: number[];
  candidates: string[];
}

const VerticalBar = ({ voteData, candidates }: IProps) => {
  const data = {
    labels: candidates,
    datasets: [
      {
        label: 'Oylar',
        data: voteData,
        backgroundColor: ['rgba(196, 37, 9, 0.2)', 'rgba(54, 162, 250, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value: number) {
              if (value % 1 === 0) {
                return value;
              }
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="header">Seçim Sonuçları</div>
      <Bar data={data} options={options} type="bar" />
    </>
  );
};

export default VerticalBar;
