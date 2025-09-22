
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from './Profile';
function App() {

  return (
    <div className='flex justify-center '>
      <Routes>
        <Route path = "/profile" element = {<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
