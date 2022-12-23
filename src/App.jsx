import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Cadastro } from './Pages/Catasdro'
import { IndexOrigin } from './Pages/index/indexOrigin'
import { Login } from './Pages/Login'

function App() {


  return (
    <div className="App">
      <div className="stars"></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexOrigin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
      <div className="stars"></div>
    </div>
  )
}

export default App
