import { Button, Card, Stack } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputConponent } from '../../conponent/Input'
import { LogoMarca } from '../../conponent/LogoMarca'
import './index.css'
import { ComponentID } from './componentID'
import { Verification } from '../../conponent/verificationID'

export const Cadastro = () => {

    const [data, setData] = useState(
        {
            nameSchool: '',
            modoPP: '',
            modulo: '',
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
        PU_PA: data?.modoPP.includes('PU') ||
            data?.modoPP.includes('PA'),
        modulo: data?.modulo.includes('Médio') ||
            data?.modulo.includes('Fundamental'),
        cep: data?.cep.length < 8 ||
            data?.cep.length > 10,
    }
    const btnVerification = {
        background1: verifications?.erroNameSchool ? colors?.erro : colors?.ok,
        background2: !verifications?.PU_PA ? colors?.erro : colors?.ok,
        background3: !verifications?.modulo ? colors?.erro : colors?.ok,
        background4: verifications?.cep ? colors?.erro : colors?.ok
    }
    const submit = Object.values(btnVerification).find(
        (item => item === colors?.erro)
    )
    return (
        <>
            <LogoMarca></LogoMarca>
            <h3 className='titleCadastro'>
                Cadastrar a sua escola
            </h3>
            <Card className='cards'>
                <InputConponent
                    value={data?.nameSchool}
                    onChange={handleDatas}
                    name='nameSchool'
                    ID_Input='NE'
                    style={{
                        background: verifications?.erroNameSchool ? colors?.erro : colors?.ok
                    }}
                    nameConponet="Nome da escola"
                />
                <InputConponent
                    value={data?.modoPP}
                    onChange={handleDatas}
                    name='modoPP'
                    ID_Input='PP'
                    nameConponet="Digita se PU se é publico e PA se particular"
                    style={{
                        background: !verifications?.PU_PA ? colors?.erro : colors?.ok
                    }}
                />
                <InputConponent
                    value={data?.modulo}
                    onChange={handleDatas}
                    name='modulo'
                    ID_Input='MD'
                    nameConponet="Fundamental/Médio"
                    style={{
                        background: !verifications?.modulo ? colors?.erro : colors?.ok
                    }}
                />
                <InputConponent
                    value={data?.cep}
                    onChange={handleDatas}
                    name='cep'
                    nameConponet="CEP"
                    ID_Input='CEP'
                    type='number'
                    style={{
                        background: verifications?.cep ? colors?.erro : colors?.ok
                    }}
                />
            </Card>
            <Verification datas={verifications} Colors={colors} />
            <div className='stackButtons'>
                <Button
                    fullWidth={true}
                    sx={{
                        background: submit? 'gray': 'green'
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
                    <Link to='/login'>
                        Logar
                    </Link>
                </Button>
            </div>
        </>
    )
}