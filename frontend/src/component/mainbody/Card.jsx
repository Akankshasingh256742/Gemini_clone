import React, { useContext } from 'react'
import './card.css'
import { Context } from '../../context/Context'

function Card({data,image}) {
const { onsent,setrecentprompt } = useContext(Context)

  const searchresult = async(prompt)=>{
    setrecentprompt(prompt)
    await onsent(prompt)
}
  return (
    <div onClick={()=>searchresult(data)} className='card'>
        <p>{data}</p>
        <img src={image} alt="" />
    </div>
  )
}

export default Card