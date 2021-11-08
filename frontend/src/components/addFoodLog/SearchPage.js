import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodData } from '../redux/actions/foodLogActions';



const SearchPage = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, error, results } = useSelector(state => state.resultsList)

    const [input, setInput] = useState('')
    const handleInput = () => {
        setInput(input)
    }

    const handleSearch = () => {
        dispatch(fetchFoodData(input))
    }
    
    // useEffect(() => {
        
    // }, [dispatch])

    return (
        <div>

        </div>
    )
}

export default SearchPage