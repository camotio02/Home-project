import './noticias.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
export const NoticiasStudent = () => {
    return (
        <>
            <div className="agenda">
                <div className='containerAgenda'>
                    <Link to='/menuStudent' className="AgendaArrowBack">
                        <ArrowBackIcon fontSize='medium'/> <h4>Nóticias</h4>
                    </Link>
                    <h1>Sem nóticias neste momento</h1>
                </div>
            </div>
        </>
    )
}