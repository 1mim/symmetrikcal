import React from 'react'
import { Line } from 'react-chartjs-2';

const LogHistoryChart = ({ a, b, c, d, e, f, dayA, dayB, dayC, dayD, dayE, dayF, userInfo }) => {

    const data = {
        labels: [dayF, dayE, dayD, dayC, dayB, dayA],
        datasets: [
        {
            type: 'line',
            label: 'Total Kcal',
            // data: [90, 89, 89.7, 91, 88, 90],
            data: [f, e, d, c, b, a],
            fill: true,
            backgroundColor: 'rgba(251, 209, 233, 0.2)',
                borderColor: 'rgba(251, 209, 233, 1)',
                borderWidth: 2,
                pointRadius: 3,
                pointBorderColor: 'rgba(186, 206, 243, 1)',
                pointBackgroundColor: 'rgba(186, 206, 243, 0.5)',
            },
            {
                type: 'line',
                label: 'Target Kcal',
                data: [userInfo.targetKcal, userInfo.targetKcal, userInfo.targetKcal, userInfo.targetKcal, userInfo.targetKcal, userInfo.targetKcal, ],
                borderColor: 'rgba(186, 206, 243, 1)',
                pointBackgroundColor: 'rgba(186, 206, 243, 0)',
                pointBorderColor: 'rgba(186, 206, 243, 0)',
                pointRadius: 0,
                borderWidth: 2,
                fill: false,

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
                  display: true,
                  position:'top',
              }
          },
      };
    
    return (
        <div className="stay">
           
            
            <div className="loghistory-title">Progress Tracker</div>
            
            <div className="weightchartcontain"><Line data={data} options={options} height={130} /></div><br/>
            <div className="weightname">Last 7 Days</div>
                   
        </div>
    )
}

export default LogHistoryChart
