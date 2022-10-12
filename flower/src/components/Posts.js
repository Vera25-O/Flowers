import React from 'react'

import ShoesContainer from "./ShoesContainer";

function Posts({shoes,setShoes}) {

 


  return (
    <div className='post'>

     <ShoesContainer shoes={shoes} setShoes={setShoes} />

    </div>
  )
}

export default Posts;