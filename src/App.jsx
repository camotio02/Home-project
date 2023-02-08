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
import { HomePageStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Dashboard/HomePage';
import { GradesStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Grade/gradesStudent';
import { NotasStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Notas/notasStudent';
import { FrequenciaInDates } from './USUARIOLOGADO/AcessoDoAluno/pages/Frequencia/frequenciaStudent';
import { MenuStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Menu/menuStudent';
import { AgendaStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Menu/pages/agenda/agenda';
import { AvisosStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Menu/pages/avisos/avisos';
import { NoticiasStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Menu/pages/noticias/noticias';
import { PerfilStudent } from './USUARIOLOGADO/AcessoDoAluno/pages/Menu/pages/perfilAluno/perfilStudent';
import { AboutSite } from './USUARIOLOGADO/AcessoDoAluno/pages/Menu/pages/sobre/sobre';
import { HomeTeacher } from './USUARIOLOGADO/AcessoProfessor/pages/Dashboard/HomePage';
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
      </BrowserRouter>
      {/* LOGGED IN STUDENT */}
      <BrowserRouter>
        <Routes>
          <Route path='/homepageStudent' element={<HomePageStudent />} />
          <Route path='/gradesStudent' element={<GradesStudent />} />
          <Route path='/notasStudent' element={<NotasStudent />} />
          <Route path='/frequenciaInDates' element={<FrequenciaInDates />} />
          <Route path='/menuStudent' element={<MenuStudent />} />
          <Route path='/agendaStudent' element={<AgendaStudent />} />
          <Route path='/avisosStudent' element={<AvisosStudent />} />
          <Route path='/noticiasStudent' element={<NoticiasStudent />} />
          <Route path='/perfilStudent' element={<PerfilStudent />} />
          <Route path='/about' element={<AboutSite />} />
        </Routes>
      </BrowserRouter>
       {/* LOGGED IN PROFESSOR */}
       <BrowserRouter>
        <Routes>
          <Route path='/homepageProf' element={<HomeTeacher />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
