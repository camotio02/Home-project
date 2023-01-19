import './modosLogin.css'
import { LogoMenu } from '../../conponent/LogoMenu/index';
import { LinksPage } from '../../conponent/Links/links';
import { Card, Stack } from '@mui/material';
import Image1 from '../../images/teacher.webp'
import Image2 from '../../images/student.webp'
import Image3 from '../../images/admin1.webp'

const modos = [
    {
        title: 'Aluno',
        avatar: Image2
    },
    {
        title: 'Professor',
        avatar: Image1
    },
    {
        title: 'Admin',
        avatar: Image3
    },
]
const Modos = ({
    title,
    avatar
}) => {
    return (
        <>
            <div className='modosInfos'>
                <img src={avatar} alt="" />
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
                    <strong>Entradas</strong>
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