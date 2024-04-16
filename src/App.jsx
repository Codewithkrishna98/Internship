import './App.css'
import Starting from './components/Starting'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login'
import Signup from './components/Signup'
import { useEffect, useState } from 'react'
import { auth } from './firebase'
import Home from './components/Home'


// import Login2 from './components/Login2'


function App() {
  const [menuOpen,setMenuopen]=useState(false)
  console.log(menuOpen)
  const [username,setUsername]=useState("")
  useEffect(   ()=>{
  auth.onAuthStateChanged((user)=>{
   if(user){
     setUsername(user.displayName)
     
  }else setUsername("")
  
})
  },[])

  return (
  
     
    <Router>
<Routes>
  <Route  path='/'   element={<Starting />} />
  <Route  path='/login'   element={<Login/> }  />
  <Route  path='/signup'   element={<Signup/>} />
  <Route  path='/home'   element={     <Home  name={username} setMenuopen={setMenuopen}
  menuOpen={menuOpen}
  />} />
  {/* <Route  path='/login2'   element={<Login2/>} /> */}
</Routes>

    </Router>
      
    
  )
}

export default App
