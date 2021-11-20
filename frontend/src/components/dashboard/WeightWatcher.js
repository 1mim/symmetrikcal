import React from 'react'
import { Line } from 'react-chartjs-2';

const WeightWatcher = ({ userInfo }) => {
    
    const data = {
        // labels: [moment(day[0]).format('ddd'), moment(day[1]).format('ddd'), moment(day[2]).format('ddd'), moment(day[3]).format('ddd'), moment(day[4]).format('ddd'), moment(day[5]).format('ddd')],
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Weight',
            data: [90, 89, 89.7, 91, 88, 90],
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
        <div className="dashboard-weight">
            <div>
                <div className="weightsectiontitle">Weight Watcher</div>
                <div className="weightchartcontain"><Line data={data} options={options} height={95}/></div>
            </div>
            <div>
                <div className="weight-card">
            <div className="weightname">Current Weight</div>
                    <div className="dash-weightvalue">{userInfo.currentWeight}kg</div>
                    </div>
                
                    <div className="weight-card">
                <div className="weightname">Target Weight</div>
                    <div className="dash-weightvalue">{userInfo.targetWeight}kg</div>
                    </div>

            </div>
        </div>
    )
}

export default WeightWatcher
