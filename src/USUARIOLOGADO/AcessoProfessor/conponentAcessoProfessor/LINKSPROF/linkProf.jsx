import './linkProf.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GradingIcon from '@mui/icons-material/Grading';
import AddAlertIcon from '@mui/icons-material/AddAlert';
const links = [
    { namesLink: 'Home', link: '2', icon: <HomeIcon/> },
    { namesLink: 'Dias Aulas', link: '2', icon: <DateRangeIcon/> },
    { namesLink: 'Sala de chamada', link: '2', icon: <GradingIcon/> },
    { namesLink: 'Frequência', link: '2', icon: <EventAvailableIcon/> },
    { namesLink: 'Adicionar aviso', link: '2', icon: <AddAlertIcon/> },
]
export const LinksProf = (
    { namesLink, link, icon }
) => {
    return (
        <>
            <Link className="linksProfItem li" to={link}>
                {icon}
                <span>{namesLink}</span>
            </Link>
        </>
    )
}
export const LinksProfConpinent = () => {
    return (
        <>

            {
                links.map((item) => (
                    <div
                        className="linksProfItem li">
                        <LinksProf key={item.name} {...item} />
                    </div>
                ))
            }
        </>
    )
}