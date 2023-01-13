import { Button, Card } from '@mui/material'
import { Link } from 'react-router-dom'
import { Logo } from '../../conponent/Logo/logo-svg'
import './stylesOrigin.css'
import { createTheme } from '@mui/material/styles';
import { LogoMenu } from '../../conponent/LogoMenu';
import Image1 from '../../images/images2.jpg'
import Image2 from '../../images/welcome.jpg'
import Image3 from '../../images/NFe.png'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const links = [
    { link: '/home',namdeLink: 'Inicio' }, { link: 'historia',namdeLink: 'Nossa história' }, { link: '',namdeLink: 'Informações' },
    { link: '',namdeLink: 'Modos de entrada' }, { link: '',namdeLink: 'Logar-se' }
]
const mapImages = [
    { names: Image1 },
    { names: Image2 },
    { names: Image3 },
]
export const MapsImages = ({ names }) => {
    return (
        <>
            <img src={names} alt="" />
        </>
    )
}
export const Links = ({ namdeLink, link}) => {
    return (
        <>

            <h2 className='linkshover'>
                <Link to={link}>
                    {namdeLink}
                </Link>
            </h2>
        </>
    )
}
export const IndexOrigin = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className='contain'>
                <LogoMenu />
                <Carousel activeIndex={index} onSelect={handleSelect}>

                    <Carousel.Item>
                        <img
                            className="carousel"
                            src={Image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="mapimages">
                                {
                                    mapImages.map((item) => (
                                        <MapsImages key={item.title} {...item} />
                                    ))
                                }
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel"
                            src={Image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="mapimages">
                                {
                                    mapImages.map((item) => (
                                        <MapsImages key={item.title} {...item} />
                                    ))
                                }
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel"
                            src={Image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="mapimages">
                                {
                                    mapImages.map((item) => (
                                        <MapsImages key={item.title} {...item} />
                                    ))
                                }
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='links'>
                    {
                        links.map((item) => (
                            <Links key={item.title} {...item} />
                        ))
                    }
                </div>
            </div>
            <div className='hover'>
                <h1>Welcome to Electronic Control School</h1>
                <h3>Sua melhor escolha para o control
                    dos seus dados e alunos,
                    faça o seu cadastro se não estiver cadastrado ou login
                </h3>
            </div>
        </>
    )
}

{/* <div className="cardInicial">
                <div class="stars" ></div>
                <div class="stars2" ></div>
                <Logo />
                <h3
                    className='h3-cardaInicial'>
                    Electronic
                    Control
                    School
                    é a sua
                    inovação,
                    usa e controle a sua escola 4x
                </h3>
                <Button sx={
                    {
                        background: 'green',
                        width: '20rem',
                        mb: '10px'
                    }
                }
                    className="buttonInicial"
                    variant="contained">
                    <Link to='/cadastro'>
                        Não, é primeira vez!</Link>
                </Button>
                <Button sx={
                    {
                        background: 'green',
                        width: '20rem',
                        mb: '10px'
                    }
                } className="buttonInicial" variant="contained">
                    <Link to='/login'>
                        Não é primeira vez!</Link>
                </Button>
            </div> */}