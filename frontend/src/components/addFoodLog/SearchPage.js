import { Input, Button, FlatList, View, Text } from 'native-base'
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
        <View>
            {/* <Text>Hello?</Text> */}
        <Input
      mx="3"
        placeholder="Search"
        onChange={handleInput}        
      w={{
        base: "75%",
        md: "25%",
      }}
        />
            <Button onPress={handleSearch} title="Search" />
            
            <FlatList
                data={results.parsed}
                renderItem={({ food }) => {
                    <View>
                        <Text>{food.food.label}</Text>
                        <Text>{food.food.ENERC_KCAL}</Text>
                    </View>
                }}/>

    </View>
    )
}

export default SearchPage