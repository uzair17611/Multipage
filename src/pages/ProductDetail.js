import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
  const params=useParams()
  console.log(params.productId)
  return (
    <>
    <div>ProductDetail</div>
    <p>{params.productId}</p>
    </>
  )
}

export default Productdetail