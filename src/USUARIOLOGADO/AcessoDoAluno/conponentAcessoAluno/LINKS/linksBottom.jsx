import './linksBottom.css'
import { Stack, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckIcon from '@mui/icons-material/Check';
import MenuIcon from '@mui/icons-material/Menu';
const li = [
    {
        link: '/homepageStudent',
        icon: <HomeIcon />,
        titles: 'Inicio'
    },
    {
        link: '/gradesStudent',
        icon: <AccessTimeIcon />,
        titles: 'Time'
    },
    {
        link: '/notasStudent',
        icon: <MenuBookIcon />,
        titles: 'Notas'
    },
    {
        link: '',
        icon: <CheckIcon />,
        titles: 'Frequência'
    },
    {
        link: '',
        icon: <MenuIcon />,
        titles: 'Menu'
    },
]
export const Li = ({
    titles,
    icon,
    link
}) => {
    return (
        <>
            <Link className="li" to={link}>
                {icon}
                {titles}
            </Link>
        </>

    )
}
export const LinksBottom = ({
    stilos,
    ...props
}) => {
    return (
        <>
            <Card className="sideLinks" id=''>
                {
                    li.map((item) => (
                        <div
                            style={stilos}
                            className="li">
                            <Li key={item.name} {...item} />
                        </div>
                    ))
                }
            </Card>
        </>
    )
}