import React from 'react'

import FlowerCard from "./FlowerCard";

function Posts({flowers,setFlowers}) {

 


  return (
    <div className='post'>

     <FlowerCard flowers={flowers} setFlowers={setFlowers} />

    </div>
  )
}

export default Posts;