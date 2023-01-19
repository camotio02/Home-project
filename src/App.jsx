import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { DefaultPage } from './Incio'
import { Cadastro } from './Pages/Catasdro'
import { IndexOrigin } from './Pages/index/indexOrigin'
import { Login } from './Pages/Login'
import { Dashboard } from './PagesUserLagado/HomeUserLogado/Dashboard/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Historia } from './Pages/NossaHistoria/historia'
import { InfoProject } from './Pages/Info/info'
import { ModosEntradas } from './Pages/ModosDeEntrada/modosLogin'
import { Contato } from './Pages/Contato/contato';
function App() {


  return (
    <>
      <div className="stars"></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultPage />} />
        </Routes>
        <div className="App">
          <Routes>
            <Route path='/origin' element={<IndexOrigin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/historia' element={<Historia />} />
            <Route path='/info' element={<InfoProject />} />
            <Route path='/modosEntradas' element={<ModosEntradas />} />
            <Route path='/contato' element={<Contato />} />
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
