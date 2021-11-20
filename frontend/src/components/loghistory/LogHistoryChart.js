import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

const LogHistoryChart = ({ moment, round2Digits, meal }) => {

    const a = Math.round(meal[0].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0));
    const b = Math.round(meal[1].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0));
    const c = Math.round(meal[2].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0));
    const d = Math.round(meal[3].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0));

    // const dayA = moment(meal[0].date).format("ddd, MMM D YYYY");
    // const dayB = moment(meal[1].date).format("ddd, MMM D YYYY");
    // const dayC = moment(meal[2].date).format("ddd, MMM D YYYY");
    // const dayD = moment(meal[3].date).format("ddd, MMM D YYYY");

    const data = {
        // labels: [moment(day[0]).format('ddd'), moment(day[1]).format('ddd'), moment(day[2]).format('ddd'), moment(day[3]).format('ddd'), moment(day[4]).format('ddd'), moment(day[5]).format('ddd')],
        // labels: [dayD, dayC, dayB, dayA],
        labels: [],
        datasets: [
          {
            label: 'Weight',
            // data: [90, 89, 89.7, 91, 88, 90],
            data: [d, c, b, a],
            fill: true,
            backgroundColor: 'rgba(251, 209, 233, 0.2)',
                borderColor: 'rgba(251, 209, 233, 1)',
                borderWidth: 1,
                pointBorderColor: 'rgba(186, 206, 243, 1)',
                pointBackgroundColor: 'rgba(186, 206, 243, 0.5)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          },
          plugins: {
              legend: {
                  display: false,
              }
          },
      };
    
    return (
        <div>
             <div className="weightsectiontitle">Progress Tracker</div>
                <div className="weightchartcontain"><Line data={data} options={options} height={95}/></div>
        </div>
    )
}

export default LogHistoryChart
