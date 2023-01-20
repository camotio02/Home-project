import { Button, Card, colors, Dialog, DialogContent, Stack } from '@mui/material'
import './index.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogoMarca } from '../../../../conponent/LogoMarca'
import { InputConponent } from '../../../../conponent/Input'
import { ComponentID } from '../../CADASTRO/Aluno/componentID'
import { LogoLetters } from '../admins/miniConponent'
// import { ComponentID } from '../../../Catasdro/componentID'
export const LoginStudent = () => {
    const [showErroDinamic, setShowErroDinamic] = useState(false)
    const navigate = useNavigate()
    const momentSendDatas = {
        primeiro: 'Verificando se seus dados existem...',
        segundo: 'Enviando seus dados para o servidor...',
        terceiro: 'Retornando uma resposta...',
        quarto: 'Concluindo as etapas e entrando...'
    }
    function etapas() {
        setTimeout(() => {
            setShowErroDinamic(`${momentSendDatas.primeiro}`)
        }, "1000");
        setTimeout(() => {
            setShowErroDinamic(`${momentSendDatas.segundo}`)
        }, "3000");
        setTimeout(() => {
            setShowErroDinamic(`${momentSendDatas.terceiro}`)
        }, "6000");
        setTimeout(() => {
            setShowErroDinamic(`${momentSendDatas.quarto}`)
        }, "8000");
        setTimeout(() => {
            setShowErroDinamic("");
            setShowErroDinamic(false);
            navigate('/dashboard')
        }, "10000");
    }
    const Entrando = () => {
        let newMessage = "ERRO:\n";
        etapas()

    }

    const [data, setData] = useState(
        {
            numberStudent: '',
            cpf: ''
        }
    )
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
        errorNumberStudent: data?.numberStudent.length == null ||
            data?.numberStudent.length < 8,
        cpf: data?.cpf.length < 8 ||
            data?.cpf.length > 10,
    }
    const btnVerification = {
        background1: verifications?.errorNumberStudent ? colors?.erro : colors?.ok,
        background4: verifications?.cpf ? colors?.erro : colors?.ok
    }
    const submit = Object.values(btnVerification).find(
        (item => item === colors?.erro)
    )
    return (
        <>
            <strong>
                Logando como aluno
            </strong>
            <LogoLetters/>
            <Card className='cards'>
                <InputConponent
                    value={data?.numberStudent}
                    onChange={handleDatas}
                    name='numberStudent'
                    ID_Input='CELL'
                    type='number'
                    style={{
                        background: verifications?.errorNumberStudent ? colors?.erro : colors?.ok
                    }}
                    nameConponet="Celular do aluno"
                />
                <InputConponent
                    value={data?.cpf}
                    onChange={handleDatas}
                    name='cpf'
                    nameConponet="CPF do aluno"
                    ID_Input='CPF'
                    type='number'
                    style={{
                        background: verifications?.cpf ? colors?.erro : colors?.ok
                    }}
                />
            </Card>

            <div className="itens">
                <ComponentID ID='CELL'
                    style={{
                        background: verifications?.errorNumberStudent ? colors?.erro : colors?.ok
                    }}
                    styleSpan={{
                        color:
                            verifications?.errorNumberStudent ? 'black' : 'white'
                    }}
                    condicional={verifications?.errorNumberStudent ? 'False' : 'True'}
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
                    Submeter os dados do aluno
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