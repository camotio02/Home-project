import { Button, Card, Stack } from '@mui/material'
import { InputConponent } from '../../conponent/Input'
import { Logo } from '../../conponent/Logo/logo-svg'
import './index.css'


export const Cadastro = () => {
    return (
        <>
            <div className="logo">
                <Logo />
            </div>
            <h3 className='titleCadastro'>Cadastrar a sua escola</h3>
            <Card className='cards'>
                <InputConponent
                    nameConponet="Nome da escola"
                />
                <InputConponent
                    nameConponet="Digita se PU se é publico e PA se particular"
                />
                <InputConponent
                    nameConponet="Fundamental/Médio"
                />
                <InputConponent
                    nameConponet="CEP"
                />
            </Card>
            <div className='stackButtons'>
                <Button
                    fullWidth={true}
                    variant="contained"
                >
                    Submeter os dados
                </Button>
                <Button

                    variant="contained"
                    color='secondary'
                >
                    Logar
                </Button>
            </div>
        </>
    )
}