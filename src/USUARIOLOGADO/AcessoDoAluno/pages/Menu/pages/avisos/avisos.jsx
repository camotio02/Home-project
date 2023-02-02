import './avisos.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
export const AvisosStudent = () => {
    return (
        <>
            <div className="agenda">
                <div className='containerAgenda'>
                    <Link to='/menuStudent' className="AgendaArrowBack">
                        <ArrowBackIcon fontSize='medium'/> <h4>Avisos</h4>
                    </Link>
                    <h1>Nenhum aviso encontrado </h1>
                </div>
            </div>
        </>
    )
}