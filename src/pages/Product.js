import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
  <section>The Complete JavaScript Course 2023: From Zero to Expert!</section>
  <ul>
    <li>
    <Link to='/Product/p1'>  class</Link> class
    </li>
    <li>
    <Link to='/Product/p2'>  student </Link>  
    </li>
    <li>
      <Link to ='/Product/p3'>name </Link>  
    </li>
  </ul>
  </>
  )
}

export default Product