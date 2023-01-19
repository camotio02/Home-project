import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { DefaultPage } from './Incio'
import { Cadastro } from './USERNOTLOGED/Pages/Catasdro'
import { IndexOrigin } from './USERNOTLOGED/Pages/index/indexOrigin'
import { Login } from './USERNOTLOGED/Pages/Login'
import { Dashboard } from './USERNOTLOGED/PagesUserLagado/HomeUserLogado/Dashboard/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Historia } from './USERNOTLOGED/Pages/NossaHistoria/historia'
import { InfoProject } from './USERNOTLOGED/Pages/Info/info'
import { ModosEntradas } from './USERNOTLOGED/Pages/ModosDeEntrada/modosLogin'
import { Contato } from './USERNOTLOGED/Pages/Contato/contato';
function App() {


  return (
    <>
      <div className="stars"></div>
      {/* ORIGIN */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultPage />} />
          <Route path='/origin' element={<IndexOrigin />} />
        </Routes>

        <div className="App">
          {/* LOGIN */}
          <Routes>
            <Route path='/loginStudent' element={<Login />} />
          </Routes>
          {/* CADASTRO */}
          <Routes>
            <Route path='/registerStudent' element={<Cadastro />} />
          </Routes>
          <Routes>
            <Route path='/historia' element={<Historia />} />
            <Route path='/info' element={<InfoProject />} />
            <Route path='/modosEntradas' element={<ModosEntradas />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
          <div className="stars"></div>
        </div>
        {/* LOGGED IN USER */}
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
