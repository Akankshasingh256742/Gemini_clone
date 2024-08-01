import { createContext, useState } from "react";
import run from "../config/gemini";

const Context = createContext();

const Contextprovider = (props)=>{
    const [input,setinput]=useState('')
    const [viewresult,setviewresult]=useState(false)
    const [loading,setloading]=useState(false)
    const [result,setresult]=useState('')
    const [recentprompt,setrecentprompt]=useState('')
    const [prevprompt,setprevprompt]=useState([])

    const typeeffect =(index,nextletter)=>{
         setTimeout(() => {
            setresult((prev)=>prev+nextletter)
         }, 75*index);
    }
     
    const onsent = async(prompt)=>{
        setresult('')
        setloading(true)
        setviewresult(true)
        let response
        if(prompt !== undefined){
            
            setrecentprompt(prompt)
            response = await run(prompt)
        }else{
            
            setrecentprompt(input)
            setprevprompt((prev)=>[...prev,input])
            response = await run(input)
        }
       
        const newArray = response.split('**')
        let newresponse =''
        for(let i=0;i<newArray.length;i++){
            if(i==0 || i%2==0){
                newresponse = newresponse + newArray[i]
            }
            else{
                newresponse = newresponse + `<b> ${newArray[i]} </b>`
            }
        }
        let newresponse2=newresponse.split('*').join('<br />')
        let newresponse3=newresponse2.split('#').join('')
        let newresponse4=newresponse3.split(' ')
        for(let i=0;i<newresponse4.length;i++){
            const nextword=newresponse4[i]
            typeeffect(i,nextword+' ')
        }
        setloading(false)
        setinput('')
        
    }


    const contextValue ={
          onsent,
          input,
          setinput,
          result,
          loading,
          viewresult,
          recentprompt,
          prevprompt,
          setrecentprompt,
          setloading,
          setviewresult
    }

    return (
        <Context.Provider value={contextValue}>
               {props.children}
        </Context.Provider>
    )
}



export {Context,Contextprovider}