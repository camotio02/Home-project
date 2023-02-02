import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Logo } from '../../../../../../USERNOTLOGED/conponent/Logo/logo-svg';
import './sobre.css'
export const AboutSite = () => {
    return (
        <>
            <div className="about">
                <div className="stars"></div>
                <div className='containerAgenda'>
                    <Link to='/menuStudent' className="AgendaArrowBack">
                        <ArrowBackIcon fontSize='medium'/> <h4>Sobre</h4>
                    </Link>
                    <div className="barLeft">
                        <Logo />
                    </div>
                    <div className="stars"></div>
                    <div className='nameAbout'>Sistema Electronic Control School</div>
                    <div>Web site @2023</div>
                    <div className="stars3"></div>
                    <div className="stars2"></div>
                </div>
            </div>
        </>
    )
}