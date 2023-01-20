import { InputConponent } from "../../../../conponent/Input"
import { ComponentID } from "../../CADASTRO/Aluno/componentID"
import { useState } from 'react';
import { Card, Button, Dialog, DialogContent, Stack } from '@mui/material';
import { LogoMarca } from "../../../../conponent/LogoMarca";
import './admin.css'
import { LogoLetters } from "./miniConponent";
export const LoginAdmin = () => {
    const [showErroDinamic, setShowErroDinamic] = useState(false)
    const [data, setData] = useState(
        {
            cellphoneAdmin: '',
            cpf: '',
            password: ''
        }
    )
    const Entrando = () => {
        let newMessage = "ERRO:\n";
        etapas()

    }
    const colors = {
        erro: 'red',
        ok: 'green'
    }
    const handleDatas = (e) => {
        const value = e.target.value
        const name = e.target.name;
        setData((old) => {
            return { ...old, [name]: value };
        });
    }
    const verifications = {
        cpfAdmin: data?.cellphoneAdmin.length > 8 ||
            data?.cellphoneAdmin.length < 8,
        cpf: data?.cpf.length < 11 ||
            data?.cpf.length > 11,
        password: data?.password.length < 8 ||
            data?.password.length > 8,
    }
    const btnVerification = {
        background1: verifications?.cpfAdmin ? colors?.erro : colors?.ok,
        background2: verifications?.cpf ? colors?.erro : colors?.ok,
        background3: verifications?.password ? colors?.erro : colors?.ok
    }
    const submit = Object.values(btnVerification).find(
        (item => item === colors?.erro)
    )
    return (
        <>
            <strong>
                Login Administrador
            </strong>
            <LogoLetters/>
            <Card className='cards'>
                <InputConponent
                    value={data?.cellphoneAdmin}
                    onChange={handleDatas}
                    name='cellphoneAdmin'
                    ID_Input='CELL'
                    type='number'
                    style={{
                        background: verifications?.cpfAdmin ? colors?.erro : colors?.ok
                    }}
                    nameConponet="Celular do Administrador"
                />
                <InputConponent
                    value={data?.cpf}
                    onChange={handleDatas}
                    name='cpf'
                    nameConponet="CPF do Administrador"
                    ID_Input='CPF'
                    type='number'
                    style={{
                        background: verifications?.cpf ? colors?.erro : colors?.ok
                    }}
                />
                <InputConponent
                    value={data?.password}
                    onChange={handleDatas}
                    name='password'
                    nameConponet="Chave do acesso"
                    ID_Input='KEY'
                    type='password'
                    style={{
                        background: verifications?.password ? colors?.erro : colors?.ok
                    }}
                />
            </Card>
            <div className="itens">
                <ComponentID ID='CELL'
                    style={{
                        background: verifications?.cpfAdmin ? colors?.erro : colors?.ok
                    }}
                    styleSpan={{
                        color:
                            verifications?.cpfAdmin ? 'black' : 'white'
                    }}
                    condicional={verifications?.cpfAdmin ? 'False' : 'True'}
                />
                <ComponentID ID='CPF'
                    style={{
                        background: verifications?.cpf ? colors?.erro : colors?.ok
                    }}
                    styleSpan={{
                        color:
                            verifications?.cpf ? 'black' : 'white'
                    }}
                    condicional={verifications?.cpf ? 'False' : 'True'}
                />
                <ComponentID ID='KEY'
                    style={{
                        background: verifications?.password ? colors?.erro : colors?.ok
                    }}
                    styleSpan={{
                        color:
                            verifications?.password ? 'black' : 'white'
                    }}
                    condicional={verifications?.password ? 'False' : 'True'}
                />
            </div>
            <div className='stackButtons'>
                <Button
                    fullWidth={true}
                    onClick={Entrando}
                    sx={{
                        background: submit ? 'gray' : 'green'
                    }}
                    className='ButtonComponent'
                    variant={submit ? 'disabled' : 'contained'}
                >
                    Submeter os dados do Administrador
                </Button>
            </div>
            <Dialog open={showErroDinamic} >
                <DialogContent>
                    <Stack>
                        <div style={{ color: "red" }}>{showErroDinamic}</div>
                        <div className="loader--text"></div>
                    </Stack>
                </DialogContent>
            </Dialog>

        </>
    )
}