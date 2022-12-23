import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Cadastro } from './Pages/Catasdro'
import { IndexOrigin } from './Pages/index/indexOrigin'
import { Login } from './Pages/Login'
import { Dashboard } from './PagesUserLagado/HomeUserLogado/Dashboard/index'

function App() {


  return (
    <>
      <div className="stars"></div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<IndexOrigin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
          </Routes>
          <div className="stars"></div>
        </div>
        {/* Pages of User Logado */}
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
