import React from 'react'
import SideNavbar from '../SideNavbar'
import MealLogDetails from './MealLogDetails'

const DiaryScreen = () => {
    return (
        <div>
            <div className="navbar-container">
            <SideNavbar />
            </div>
        <div className="page-container">
           <MealLogDetails />
            </div>
        </div>
    )
}

export default DiaryScreen
