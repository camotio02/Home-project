import './Inicio.css'
import { LogoMarca } from './conponent/LogoMarca/index'
import { Button, Dialog, DialogContent } from '@mui/material'
import { Stack, width } from '@mui/system'
import { Link } from 'react-router-dom'
export const DefaultPage = () => {
    return (
        <>
            <div className='container'>
                <LogoMarca />
                <h1 className='titleOrigin'>Seja bem-vindo</h1>
                <p className='description'>
                    É bom saber que está fazendo os seu contole de dados e alunos,
                    pelo ECS electronic control school,
                    seja bem vindo ao nosso programa de aprendizado, esperamos que
                    a nossa ferramenta atenda suas necessidades.
                    <br />
                    Se deseja continuar click no botão abaixo.
                </p>
                <Button variant='contained'>
                    <Link to='/origin'>
                        Continuar
                    </Link>
                </Button>
            </div>
        </>
    )
}
