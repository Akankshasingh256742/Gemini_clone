import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Sidebar() {
   const [extendmenu,setextendmenu] = useState(false)
const { prevprompt,onsent,setrecentprompt,setloading,setviewresult} = useContext(Context)

const prompset = async(prompt) =>{
    setrecentprompt(prompt)
    console.log(prompt)
    await onsent(prompt)
    
}



  return (
    <div className='sidebar'>
        <div className='uppersidebar'>
           <div className='menubar'><img onClick={()=>setextendmenu((prev)=>!prev)} src={assets.menu_icon} alt="" /></div>
           <div className='chat'  onClick={()=>{
                    setloading(false)
                    setviewresult(false)
                }}>
                <img src={assets.plus_icon} alt="" />
                {extendmenu?<p>New Chat</p>:null}
            </div>
           {extendmenu
           ?<div className='recent'>
                <p className='recenttitle'>Recent</p>
                {prevprompt.map((prompt,index)=>{
                    return <ul onClick={() => prompset(prompt)} key={index}>
                    <li>
                        <img src={assets.message_icon} alt="" />
                        <p>{prompt.slice(0,22)}...</p>
                    </li>
                </ul>
                })}
                
            </div>
            :null}
        </div>
        <div className='lowersidebar'>
            <div className='option'>
                <img src={assets.question_icon} alt="" />
                {extendmenu?<p>Help</p>:null}
            </div>
            <div className='option'>
                <img src={assets.history_icon} alt="" />
                {extendmenu?<p>Activity</p>:null}
            </div>
            <div className='option'>
                <img src={assets.setting_icon} alt="" />
                {extendmenu?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar