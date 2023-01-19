import { Button, Card, colors, Dialog, DialogContent, Stack } from '@mui/material'
import './index.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogoMarca } from '../../../../conponent/LogoMarca'
import { InputConponent } from '../../../../conponent/Input'
import { ComponentID } from '../../CADASTRO/Aluno/componentID'
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
            nameSchool: '',
            cep: ''
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
        erroNameSchool: data?.nameSchool.length == null ||
            data?.nameSchool.length < 8,
        cep: data?.cep.length < 8 ||
            data?.cep.length > 10,
    }
    const btnVerification = {
        background1: verifications?.erroNameSchool ? colors?.erro : colors?.ok,
        background4: verifications?.cep ? colors?.erro : colors?.ok
    }
    const submit = Object.values(btnVerification).find(
        (item => item === colors?.erro)
    )
    return (
        <>
            <LogoMarca>
            </LogoMarca>
            <strong className='titleCadastro'>
                ENTRAR
            </strong>
            <Card className='cards'>
                <InputConponent
                    value={data?.nameSchool}
                    onChange={handleDatas}
                    name='nameSchool'
                    ID_Input='NA'
                    style={{
                        background: verifications?.erroNameSchool ? colors?.erro : colors?.ok
                    }}
                    nameConponet="Nome do aluno"
                />
                <InputConponent
                    value={data?.cep}
                    onChange={handleDatas}
                    name='cep'
                    nameConponet="CPF"
                    ID_Input='CPF'
                    type='number'
                    style={{
                        background: verifications?.cep ? colors?.erro : colors?.ok
                    }}
                />
            </Card>

            <div className="itens">
                <ComponentID ID='NA'
                    style={{
                        background: verifications?.erroNameSchool ? colors?.erro : colors?.ok
                    }}
                    styleSpan={{
                        color:
                            verifications?.erroNameSchool ? 'black' : 'white'
                    }}
                    condicional={verifications?.erroNameSchool ? 'False' : 'True'}
                />
                <ComponentID ID='CPF'
                    style={{
                        background: verifications?.cep ? colors?.erro : colors?.ok
                    }}
                    styleSpan={{
                        color:
                            verifications?.cep ? 'black' : 'white'
                    }}
                    condicional={verifications?.cep ? 'False' : 'True'}
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
                    Submeter os dados
                </Button>

                <Button
                    variant="contained"
                    color='primary'
                >
                    <Link to='/registerStudent'>
                        Cadastrar
                    </Link>
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