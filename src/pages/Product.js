import React , { useState  }  from 'react'
import ProductComp from '../components/ProductComp'
import ProductSkullLoader from '../components/ProductSkullLoader'
function Product() {
     const [load,setLoad] = useState(false);
  setTimeout(()=>{
    setLoad(true)
  },10000)
  return (
     <>
    {load ? <ProductComp/> : <ProductSkullLoader/>}
    </>
  )
}

export default Product
