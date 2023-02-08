import { Button, Card, colors, Dialog, DialogContent, Stack } from '@mui/material'
import './index.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogoMarca } from '../../../../conponent/LogoMarca'
import { InputConponent } from '../../../../conponent/Input'
import { ComponentID } from '../../CADASTRO/Aluno/componentID'
import { LogoLetters } from '../admins/miniConponent'
import { BackPage } from '../../../../conponent/backPage/back';
export const LoginStudent = () => {
    const [data, setData] = useState(
        {
            numberStudent: '',
            cpf: ''
        }
    )
    const [showErroDinamic, setShowErroDinamic] = useState(false)
    const navigate = useNavigate()
    const momentSendDatas = {
        primeiro: 'Verificando se seus dados existem...',
        segundo: 'Enviando seus dados para o servidor...',
        terceiro: 'Retornando uma resposta...',
        quarto: 'Concluindo as etapas e entrando...'
    }
    function etapas() {
        setShowErroDinamic(true)
        setTimeout(() => {
            setShowErroDinamic("");
            setShowErroDinamic(false);
            navigate('/notasStudent')
        }, "10000");
    }
    const dados = {
        celular: 123456789,
        cpf: 80205638902
    }
    const Entrando = () => {
        let newMessage = "ERRO:\n";
        if (
            data?.numberStudent == dados?.celular &&
            data?.cpf == dados?.cpf) {
            etapas()
        } else {
            alert('Não está passando nas etapas')
        }

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
        errorNumberStudent: data?.numberStudent.length == null ||
            data?.numberStudent.length < 9,
        cpf: data?.cpf.length < 11 ||
            data?.cpf.length > 12,
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
            <BackPage />
            <LogoLetters />
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

            {showErroDinamic && <div className="spiners">
                <div className='lds-spinner'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>}


        </>
    )
}