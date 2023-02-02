import './menuStudent.css'
import { Card } from '@mui/material';
import { LinksBottom } from '../../conponentAcessoAluno/LINKS/linksBottom';
import { Logo } from '../../../../USERNOTLOGED/conponent/Logo/logo-svg';
import SurfingIcon from '@mui/icons-material/Surfing';
import DateRangeIcon from '@mui/icons-material/DateRange';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const menuIntens = [
    { icon: <DateRangeIcon />, link: '/agendaStudent', titles: 'Agenda' },
    { icon: <NotificationsIcon />, link: '/avisosStudent', titles: 'Avisos' },
    { icon: <NewspaperIcon />, link: '/noticiasStudent', titles: 'Notícias' },
    { icon: <QrCodeScannerIcon />, link: '/perfilStudent', titles: 'Perfil do aluno' },
    { icon: <InfoIcon />, link: '/about', titles: 'Sobre' },
    { icon: <ForumIcon />, link: '', titles: 'Ouvidoria' },
    { icon: <LogoutIcon />, link: '', titles: 'Sair do site' },
]
const MenuItens = ({
    icon,
    titles,
    link
}) => {
    return (
        <>
            <div className="itensMenu">
                <Link to={link}>
                    <Card className='containIcons'>
                        {icon}
                    </Card>
                </Link>
                <div className="titleIcons">
                    {titles}
                </div>
            </div>
        </>
    )
}
export const MenuStudent = () => {
    return (
        <>
            <div className="menuStudents">
                <Card className="menuBar">
                    <div className="barLeft">
                        <Logo />
                    </div>
                    <div className="barRigth">
                        <h4>Nome do estudante, completo</h4>
                        <h5>Electronic Control School</h5>
                        <div>Periodo das aulas</div>
                        <div className='surfin'><SurfingIcon />surfar para outra sala</div>
                    </div>
                </Card>
                <div className="menuItens">
                    {
                        menuIntens.map((item) => (
                            <MenuItens key={item} {...item} />
                        ))
                    }
                </div>
                <div className="ouvidoria">
                    <ForumIcon />
                </div>
                <LinksBottom />
            </div>
        </>
    )
}