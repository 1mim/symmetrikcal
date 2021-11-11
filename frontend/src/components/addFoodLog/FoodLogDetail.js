import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMealTypeSelection, updateFoodDataToLogValues } from '../redux/actions/foodLogActions';
import { Bar } from 'react-chartjs-2';


const FoodLogDetail = () => {
    const dispatch = useDispatch()
    const { loading, error, foodItem } = useSelector(state => state.foodItemData)

    const [servingSize, setServingSize] = useState(100);
    const updateServingSize = (e) => {
        setServingSize(e.target.value)
    }

    //defining the options as strings
    const snack = 'snack';
    const breakfast = 'breakfast';
    const lunch = 'lunch';
    const dinner = 'dinner';

    const handleMealTypeSelection = (e) => {
        dispatch(setMealTypeSelection(foodItem, e.target.value))
    }

    const updateValues = (e) => {
        e.preventDefault()
        dispatch(updateFoodDataToLogValues(foodItem, servingSize))
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
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1
        }]
    };
    
    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
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
        <div>
            {foodItem === {} ? <div> </div> :
                loading ? <p></p> :
                error ? <p>{error}</p> : (
                    
                <div>
                            <div className="logDetail">
                            <div className="result-content">
                      <div>  <h3>{foodItem.name}</h3></div>
                     <div className="logDetail-right">   <h3>{Math.round((foodItem.calories + Number.EPSILON) * 100) / 100}kcal</h3></div>
                                </div></div>
                            <div className='logDetail'>
                                <Bar data={data} options={options} height={80}/>
                            </div>


            <form onSubmit={updateValues} className="logDetail">
                            <div className="result-content">
                         <div><label>Serving Size(g)</label></div>
            <div className="logDetail-right"><input className="servingSize" onChange={updateServingSize} type="text" value={servingSize} placeholder={foodItem.servingSize}></input></div>
           </div>
                        </form>
                        <div className="logDetail">
                        <div className="result-content">
                        <div>   <label> Meal Type </label></div>
              <div className="logDetail-right">  <select onChange={handleMealTypeSelection} className="mealType">
                <option value={snack}>Snack</option>            
                <option value={breakfast}>Breakfast</option>            
                <option value={lunch}>Lunch</option>            
                <option value={dinner}>Dinner</option>           
                            </select> </div>
                            </div></div>

          </div>)}
        </div>
    )
}

export default FoodLogDetail
