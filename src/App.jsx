
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MealAppHome from './pages/MealAppHome'
import WishlList from './pages/WishlList'
import Auth from './pages/Auth'



function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mealhome' element={<MealAppHome/>}></Route>
      <Route path='/wishlist' element={<WishlList/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
      <Route path='/register' element={<Auth register/>}></Route>
    </Routes>
    </>
  )
}

export default App
