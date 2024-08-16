
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './component/landingPage/LandingPage'
import { PredictPage } from './component/predictPage/PredictPage'

function App() {


  return (
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<LandingPage/>}/>
  <Route path='/predict' element={<PredictPage/>}/>
 </Routes>
    </BrowserRouter>
  )
}

export default App
