import React, { useContext } from 'react'
import './mainbody.css'
import { assets } from '../../assets/assets'
import Card from './Card'
import { Context } from '../../context/Context'

function Mainbody() {
    const { input,setinput,onsent,recentprompt,setrecentprompt,result,loading,viewresult } = useContext(Context)
    const searchresult = async(prompt)=>{
        setrecentprompt(prompt)
        await onsent(prompt)
    }

  return (
    <div className='main'>
        <div className='topbar'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        
        <div className="mainbody">
            {!viewresult?
            <div className='final'>
                <div className="greet">
                <p>
                    <span>Hello, Dev.</span>
                </p>
                <p>How can I help you today?</p>
                 </div>
                <div className="cards">
                <Card  data={'Suggest beautiful places to see on an upcoming road trip'} image={assets.compass_icon} />
                <Card  data={'Briefly summarize this concept: urban planning'} image={assets.bulb_icon} />
                <Card data={'Brainstorm team bonding activities for our work retreat'} image={assets.message_icon} />
                <Card data={'Tell me about React js and React native'} image={assets.code_icon} />
                </div>
            </div>
            :<div className='result'>
              <div className='result-title'>
                <img src={assets.user_icon} alt="" />
                <p>{recentprompt}</p>
              </div>
              <div className='result-data'>
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:result}}></p>}
              </div>
            </div>
            }


            <div className="bottombar">
              <div>
                <div className="searchbox">
                       <input onChange={(e)=>(setinput(e.target.value))} value={input} type="text" placeholder='Enter prompt here' />
                       <div>
                        <img src={assets.gallery_icon} alt="" />
                         <img src={assets.mic_icon} alt="" />
                         <img onClick={()=>onsent()} src={assets.send_icon} alt="" />
                       </div>
                       </div>     
                <div className="bottominfo">
                    <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
                
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Mainbody