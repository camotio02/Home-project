import './modosLogin.css'
import { LogoMenu } from '../../conponent/LogoMenu/index';
import { LinksPage } from '../../conponent/Links/links';
import { Card, Stack } from '@mui/material';
import Image1 from '../../images/teacher.webp'
import Image2 from '../../images/student.webp'
import Image3 from '../../images/admin1.webp'
import { Link } from 'react-router-dom';

const modos = [
    {
        link: '/loginStudent',
        title: 'Aluno',
        avatar: Image2
    },
    {
        link: '/loginTeacher',
        title: 'Professor',
        avatar: Image1
    },
    {
        link: '/loginAdmin',
        title: 'Admin',
        avatar: Image3
    },
]
const Modos = ({
    title,
    avatar,
    link
}) => {
    return (
        <>
            <div className='modosInfos'>
                <Link to={link}>
                    <img src={avatar} alt="" />
                </Link>
                <div>{title}</div>
            </div>
        </>
    )
}

export const ModosEntradas = () => {
    return (
        <>
            <div className="entradas">
                <LogoMenu />
                <LinksPage />
                <Card className='cardEntrada'>
                    <strong>Pode logar-se como:</strong>
                    <div>

                        {
                            modos.map((modo) => (
                                <Modos key={modo.title} {...modo} />
                            ))
                        }
                    </div>
                </Card>
            </div>
        </>
    )
}