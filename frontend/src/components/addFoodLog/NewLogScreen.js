import React from 'react'
import SideNavbar from '../SideNavbar'
import FoodLogDetail from './FoodLogDetail'
import Search from './Search'

const NewLogScreen = () => {
    return (
        <div>
            <div className="navbar-container">
            <SideNavbar />
            </div>
        <div className="page-container">
           <div className="section-half"> <Search /> </div>
            <div className="section-half-right"><FoodLogDetail /></div>
            </div>
        </div>
    )
}

export default NewLogScreen
