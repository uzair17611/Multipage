import classes from './MainHeader.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const MainHeader = () => {
  return (
    <div className={classes.header}>
        <nav>
        <ul>
           
            <li>
            <NavLink  activeClassName={classes.active}  to='/Welcome'>Welcome   </NavLink>

            </li>
         
            
            <li>
            <NavLink activeClassName={classes.active} to='/Product'>    Product</NavLink>
            </li>
          
        </ul>
        </nav>
    </div>
  )
}

export default MainHeader