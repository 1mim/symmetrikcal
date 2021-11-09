import React from 'react'
import FoodLogDetail from './FoodLogDetail'
import Search from './Search'

const NewLogScreen = () => {
    return (
        <div className="page-container">
           <div className="section-half"> <Search /> </div>
            <div className="section-half"><FoodLogDetail /></div>
        </div>
    )
}

export default NewLogScreen
