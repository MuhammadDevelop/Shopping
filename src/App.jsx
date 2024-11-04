
import { Route, Routes } from 'react-router-dom'
import '../src/App.css'
 import AllPage from './routes/allPaage/AllPage'
import Login from './routes/login/Login'
import Register from './routes/register/Register'
import SinglePage from './routes/singlapage/SinglePage'
import Basket from './components/basket/Basket'

function App() {

  return (
    <>
  <Routes>
    <Route path="/register"element={<Register/>}/>
    <Route path="/login"element={<Login/>}/>
    <Route path="/"element={<AllPage/>}/>
    <Route path="/korzinka"element={<Basket/>}/>
<Route path='/single/:id'element={<SinglePage/>}/>
  </Routes>
    </>
  )
}

export default App
