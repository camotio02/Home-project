
import { Link } from 'react-router-dom'
import './links.css'
const links = [
    { link: '/origin', namdeLink: 'Inicio' }, 
    { link: '/historia', namdeLink: 'Nossa história' }, 
    { link: '/info', namdeLink: 'Informações' },
    { link: '/modosEntradas', namdeLink: 'Modos de entrada' }, 
    { link: '/contato', namdeLink: 'Contato' }
]
export const Links = ({ namdeLink,
    link,
    border
}) => {
    return (
        <>

            <h5 className='linkshover'
              
            >
                <Link to={link}>
                    {namdeLink}
                </Link>
            </h5>
        </>
    )
}
export const LinksPage = ({border}) => {

    return (
        <>
            <div className='links'>
                
                {
                    links.map((item) => (
                        <Links key={item.title} {...item} />
                    ))
                }
            </div>
        </>
    )
}