import './contato.css'
import { Card } from '@mui/material';
import { LogoMenu } from '../../conponent/LogoMenu';
import { LinksPage } from '../../conponent/Links/links';
import LogoImage from '../../images/logoImage.jpeg'
import Image1 from '../../images/gmail.jpeg'
import Image2 from '../../images/hotmail.jpg'
import Image3 from '../../images/telefone.jpg'
import { Chat } from '../../conponent/Chat/chat';
const contatos = [
    {
        title: 'Telefone',
        avatar: Image3
    },
    {
        title: 'Gmail',
        avatar: Image1
    },
    {
        title: 'Hot Mail',
        avatar: Image2
    },
]
const ContatosRedes = ({
    title,
    avatar
}) => {
    return (
        <>
            <div className='modosInfos'>
                <img src={avatar} alt="" />
                <div className='namesContact'>{title}</div>
            </div>
        </>
    )
}

export const Contato = () => {
    return (
        <>
            <div className="containerContato">

                <LogoMenu />
                <LinksPage />
                <Chat />
                <Card data-aos="fade-up-right" className='cardContato'>
                    <img className='logoImage' src={LogoImage} alt="" />
                    <div className='conatoCenter'>

                        <div data-aos="fade-up-right" className='contacts'>
                            {
                                contatos.map((contact) => (
                                    <ContatosRedes
                                        key={contact.title}
                                        {...contact}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </Card>
                <strong className='strongContact'>Contato da ECS</strong>
            </div>
        </>
    )
}