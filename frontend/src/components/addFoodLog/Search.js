import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodData } from '../redux/actions/foodLogActions';
import ResultsCard from './ResultsCard';



const Search = () => {
    const dispatch = useDispatch()
    const { loading, error, results } = useSelector(state => state.resultsList)

    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(fetchFoodData(input))
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
            <input className="search" type='text' value={input} placeholder="Search" onChange={handleInput} />
            </form>

            {loading ? <p>loading...</p> :
                error ? <p>{error}</p> : 
                    <div>
                        {results.hints.map((food) => (
                            <ResultsCard key={food.food.foodId} food={food}/>
                        ))}
                    </div>
                
            }
           
        </div>
    )
}

export default Search
