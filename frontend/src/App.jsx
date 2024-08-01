import { useState } from 'react'
import Sidebar from './component/sidebar/Sidebar'
import './index.css'
import Mainbody from './component/mainbody/Mainbody'

function App() {
  

  return (
    <div className='root' style={{
      minHeight: '100vh',
       display : 'flex'
    }}>
       <Sidebar />
       <Mainbody />
    </div>
  )
}

export default App
