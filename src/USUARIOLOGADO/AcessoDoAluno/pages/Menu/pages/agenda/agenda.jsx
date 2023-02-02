import './agenda.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
export const AgendaStudent = () => {
    return (
        <>
            <div className="agenda">
                <div className='containerAgenda'>
                    <Link to='/menuStudent' className="AgendaArrowBack">
                        <ArrowBackIcon fontSize='medium'/> <h4>Agenda</h4>
                    </Link>
                    <h1>Nenhum evento agendado</h1>
                </div>
            </div>
        </>
    )
}