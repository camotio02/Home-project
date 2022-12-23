import { Button, Card } from '@mui/material'
import { Link } from 'react-router-dom'
import { Logo } from '../../conponent/Logo/logo-svg'
import './stylesOrigin.css'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export const IndexOrigin = () => {
    return (
        <>
            <div className="cardInicial">
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

            </div>
        </>
    )
}