
import { Link } from 'react-router-dom'
import './links.css'
const links = [
    { link: '/origin', namdeLink: 'Inicio' }, 
    { link: '/historia', namdeLink: 'Nossa história' }, 
    { link: '/info', namdeLink: 'Informações' },
    { link: '', namdeLink: 'Modos de entrada' }, 
    { link: '', namdeLink: 'Logar-se' }
]
export const Links = ({ namdeLink,
    link,
    border
}) => {
    return (
        <>

            <h3 className='linkshover'
              
            >
                <Link to={link}>
                    {namdeLink}
                </Link>
            </h3>
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