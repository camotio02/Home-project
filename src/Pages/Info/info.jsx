import './info.css'
import { LogoMenu } from '../../conponent/LogoMenu'
import { LinksPage } from '../../conponent/Links/links'
import Criador1 from '../../images/TemotioImage.jpeg'
import Criador2 from '../../images/Criador2.jpeg'
import Reacts from '../../images/react.png'
import Css from '../../images/css.jpeg'
import Html from '../../images/html.png'
const criadores = [
    {
        title: 'Temotio Luis Bernardo',
        avatar: Criador1,
        area: 'Fullstack Master'
    },
    {
        title: 'Quizito Cristiano Agostinho',
        avatar: Criador2,
        area: 'Fullstack Master'
    },
]
const Criadores = ({ title, avatar, area }) => {
    return (
        <>
            <div className="infoCriadores">
                <img src={avatar} alt="" />
                <div className='desUsers'>
                    <span>Name</span>
                    <div>{title}</div>
                    <span>Level</span>
                    <div>{area}</div>
                </div>
            </div>
        </>
    )
}
const cards = [
    {
        desc: 'FrameWork:',
        foto: Reacts,
    },
    {
        desc: 'HipperText:',
        foto: Html,
    },
    {
        desc: 'Styles Pages:',
        foto: Css,
    },
]
const Cards = ({ desc, foto }) => {
    return (
        <>
            <div className='wordDiv'>
                <strong>{desc}</strong>
                <div className="infoCriadores">
                    <img src={foto} alt="" />
                    <div>React js, 2023</div>
                </div>

            </div>
        </>
    )
}
export const InfoProject = () => {
    return (
        <>
            <div className='info'>
                <LogoMenu />
                <LinksPage />
                <div className='infos'>
                    <div className='meudeinfos'>
                        <strong>Criadores:</strong>
                        {criadores.map((criador) => (
                            <Criadores key={criador.names} {...criador} />
                        ))}
                    </div>
                   {
                cards.map((car)=>(
                    <Cards key={car.title} {...car}/>
                ))}
                </div>
            </div>
        </>
    )
}