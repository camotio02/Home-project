import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { DefaultPage } from './Incio'
import { IndexOrigin } from './USERNOTLOGED/Pages/index/indexOrigin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Historia } from './USERNOTLOGED/Pages/NossaHistoria/historia'
import { InfoProject } from './USERNOTLOGED/Pages/Info/info'
import { ModosEntradas } from './USERNOTLOGED/Pages/ModosDeEntrada/modosLogin'
import { Contato } from './USERNOTLOGED/Pages/Contato/contato';
import { RegisterStudent } from './USERNOTLOGED/Pages/ModosDeEntrada/CADASTRO/Aluno/index';
import { LoginStudent } from './USERNOTLOGED/Pages/ModosDeEntrada/LOGINS/Aluno/index';
import { LoginTeacher } from './USERNOTLOGED/Pages/ModosDeEntrada/LOGINS/Professor/prof'
import { LoginAdmin } from './USERNOTLOGED/Pages/ModosDeEntrada/LOGINS/admins/admin';
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
            <Route path='/loginStudent' element={<LoginStudent />} />
            <Route path='/loginTeacher' element={<LoginTeacher />} />
            <Route path='/loginAdmin' element={<LoginAdmin />} />
          </Routes>
          {/* CADASTRO */}
          <Routes>
            <Route path='/registerStudent' element={<RegisterStudent />} />
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
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
