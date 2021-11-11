import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateSelection, setMealTypeSelection, updateFoodDataToLogValues } from '../redux/actions/foodLogActions';
import { Bar } from 'react-chartjs-2';


const FoodLogDetail = () => {
    const dispatch = useDispatch()
    const { loading, error, foodItem } = useSelector(state => state.foodItemData)

    const [servingSize, setServingSize] = useState(foodItem.servingSize);
    const updateServingSize = (e) => {
        setServingSize(e.target.value)
    }

    const updateValues = (e) => {
        e.preventDefault()
        dispatch(updateFoodDataToLogValues(foodItem, servingSize))
    }

    //defining the options as strings
    const snack = 'snack';
    const breakfast = 'breakfast';
    const lunch = 'lunch';
    const dinner = 'dinner';

    const handleMealTypeSelection = (e) => {
        dispatch(setMealTypeSelection(foodItem, e.target.value))
    }

    //handling date selection
    // const [dateSelect, setDateSelect] = useState(Date.now())
    const handleDateSelect = (e) => {
        // setDateSelect(e.target.value)
        dispatch(dateSelection(foodItem, e.target.value))
    }

    const logMealToDB = () => {
        //add dispatch to post to DB
        //action to also clear the foodItem data
        console.log('Sent to DB')
    }

    //displaying it w chart.js

    const carbs = Math.round((foodItem.carbs + Number.EPSILON) * 100) / 100
    const protein = Math.round((foodItem.protein + Number.EPSILON) * 100) / 100
    const fats = Math.round((foodItem.fats + Number.EPSILON) * 100) / 100
    
    const data = {
        labels: ['Carbs(g)', 'Protein(g)', 'Fats(g)'],
        datasets: [{
          labels: ['Carbs(g)', 'Protein(g)', 'Fats(g)'],
            data: [carbs, protein, fats],
          backgroundColor: [
            'rgba(251, 209, 233, 0.2)',
            'rgba(186, 206, 243, 0.2)',
            'rgba(255, 223, 183, 0.2)',
          ],
          borderColor: [
            'rgba(251, 209, 233, 1)',
            'rgba(186, 206, 243, 1)',
            'rgba(255, 223, 183, 1)',
          ],
          borderWidth: 1
        }]
    };
    
    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        maintainAspectRation: false,
        elements: {
          bar: {
            borderWidth: 2,
            },
            labels: {
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
        <div >
            {foodItem === {} ? <div> </div> :
                loading ? <p></p> :
                error ? <p>{error}</p> : (
                    
                <div className='detailContain'>
                            <div className="logDetail">
                            <div className="result-content">
                      <div>  <h2>{foodItem.name}</h2></div>
                     <div className="logDetail-right">   <h2>{Math.round(foodItem.calories)}kcal</h2></div>
                                </div></div>
                            <div className='logDetail borderbottom'>
                                <Bar data={data} options={options} height={110}/>
                            </div>


            <form onSubmit={updateValues} className="logDetail borderbottom">
                            <div className="result-content">
                         <div><label>Serving Size(g)</label></div>
            <div className="logDetail-right"><input className="servingSize" onChange={updateServingSize} type="text" value={servingSize} placeholder={foodItem.servingSize}></input></div>
           </div>
                        </form>
                        <div className="logDetail borderbottom">
                        <div className="result-content">
                        <div>   <label> Meal Type </label></div>
              <div className="logDetail-right">  <select onChange={handleMealTypeSelection} className="mealType">
                <option value={snack}>Snack</option>            
                <option value={breakfast}>Breakfast</option>            
                <option value={lunch}>Lunch</option>            
                <option value={dinner}>Dinner</option>           
                            </select> </div>
                                </div></div>
                            
                        <div className="logDetail borderbottom">
                        <div className="result-content">
                        <div>   <label> Date </label></div>
                                    <div className="logDetail-right">
                                        <input type="date" onChange={handleDateSelect} className="dateSelect"/>
                            </div>
                      </div></div><br/>
                      <button onClick={logMealToDB} className="addToLog">Add To Log</button>
                        </div>)}
            
        </div>
    )
}

export default FoodLogDetail
