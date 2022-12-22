import { Card, Stack } from '@mui/material'
import { InputConponent } from '../../conponent/Input'
import './index.css'

export const Cadastro = () => {
    return (
        <>
            <h1 style={{ color: 'white' }}>Cadastrar a sua escola</h1>
            <Stack className='form-register-school'>
                <InputConponent nameConponet="Nome da escola" />
            </Stack>
        </>
    )
}