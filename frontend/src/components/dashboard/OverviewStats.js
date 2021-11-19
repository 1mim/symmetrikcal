import React, { useEffect, useState } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

const OverviewStats = ({todayLogs, targetKcal, userInfo, round2Digits}) => {

    const [totalKcal, setTotalKcal] = useState(0)
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [totalProtein, setTotalProtein] = useState(0)
    const [totalFats, setTotalFats] = useState(0)

    useEffect(() => {
        if (todayLogs) {
            setTotalKcal(Math.round(todayLogs.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0)));
            setTotalCarbs(round2Digits(todayLogs.map((log) => log.carbs).reduce((prev, curr) => prev + curr, 0)))
            setTotalProtein(round2Digits(todayLogs.map((log) => log.protein).reduce((prev, curr) => prev + curr, 0)))
            setTotalFats(round2Digits(todayLogs.map((log) => log.fats).reduce((prev, curr) => prev + curr, 0)))
        }
    }, [todayLogs])
    
    let kcalLeft = targetKcal - totalKcal

    //data for dougnut
    const data = {
        labels: [`${totalKcal}kcal Logged`, `${kcalLeft}kcal Left`],
        datasets: [
          {
            labels: [`${totalKcal}kcal Logged`, `${kcalLeft}kcal Left`],
            data: [totalKcal, kcalLeft],
            backgroundColor: [
                'rgba(251, 209, 233, 0.2)',
                'rgba(186, 206, 243, 0.2)',

            ],
            borderColor: [
                'rgba(251, 209, 233, 1)',
                'rgba(186, 206, 243, 1)',
            ],
            borderWidth: 1,
                radius: '95%',
                cutout: '65%',
          },
        ],
    };

    const options = {
        maintainAspectRatio: true,
        elements: {
            labels: {
                color: 'rgba(255, 223, 183, 1)',
                display: false
            }
        },
        responsive: true,
        plugins: {
          legend: {
                position: 'bottom',
                display: true,
                color: 'rgba(255, 223, 183, 1)',
          },
          title: {
            display: false,
            text: '',
          },
        },
    };
    

    // data for barcharts
    const dataMacros = {
        labels: ['Carbs', '', 'Protein', '', 'Fats', ''],
        datasets: [{
          labels: ['Total Carbs(g)', 'Target Carbs(g)', '', '', '', ''],
            data: [
                totalCarbs,
                userInfo.targetCarbs,
                totalProtein,
                userInfo.targetProtein,
                totalFats,
                userInfo.targetFats],
          backgroundColor: [
            'rgba(251, 209, 233, 0.2)',
            'rgba(186, 206, 243, 0.2)',
            'rgba(251, 209, 233, 0.2)',
            'rgba(186, 206, 243, 0.2)',
            'rgba(251, 209, 233, 0.2)',
            'rgba(186, 206, 243, 0.2)',
          ],
          borderColor: [
            'rgba(251, 209, 233, 1)',
            'rgba(186, 206, 243, 1)',
            'rgba(251, 209, 233, 1)',
            'rgba(186, 206, 243, 1)',
            'rgba(251, 209, 233, 1)',
            'rgba(186, 206, 243, 1)',
         
          ],
            borderWidth: 1,
            barPercentage: 1.2,
            barThickness: 15,
        }]
    };
    
    const optionsMacros = {
        indexAxis: 'y',
        maintainAspectRatio: true,
        elements: {
          bar: {
            borderWidth: 2,
            },
            labels: {
                display: false,
                color: 'rgba(255, 223, 183, 1)'
            }
        },
        responsive: true,
        plugins: {
          legend: {
                position: 'top',
                display: false,
          },
          title: {
            display: true,
            text: 'Macronutrients',
          },
        },
    };
    
 
    
    return (
        <div className="dashboard-overview">
            <Doughnut data={data} height={10} options={options}  />

            <div className="floating-number">
                <h2>{kcalLeft}kcal</h2>
                <div className="outof">/ {targetKcal}kcal</div>
            </div>

            <Bar data={dataMacros} options={optionsMacros} height={300} width={500}/>
        </div>
    )
}

export default OverviewStats