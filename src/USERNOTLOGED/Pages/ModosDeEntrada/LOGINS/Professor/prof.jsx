import { InputConponent } from "../../../../conponent/Input"
import { ComponentID } from "../../CADASTRO/Aluno/componentID"
import { useState } from 'react';
import { Card, Button, Dialog, DialogContent, Stack } from '@mui/material';
import { LogoMarca } from "../../../../conponent/LogoMarca";
import { LogoLetters } from "../admins/miniConponent";
import { BackPage } from '../../../../conponent/backPage/back';
export const LoginTeacher = () => {
    const [showErroDinamic, setShowErroDinamic] = useState(false)
    const [data, setData] = useState(
        {
            cellphone: '',
            cpf: ''
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
        nameTeacher: data?.cellphone.length == null ||
            data?.cellphone.length < 9,
        cpf: data?.cpf.length < 11 ||
            data?.cpf.length > 11,
    }
    const btnVerification = {
        background1: verifications?.nameTeacher ? colors?.erro : colors?.ok,
        background4: verifications?.cpf ? colors?.erro : colors?.ok
    }
    const submit = Object.values(btnVerification).find(
        (item => item === colors?.erro)
    )
    return (
        <>
            <strong>
                Logando como professor
            </strong>
            <BackPage/>
            <LogoLetters/>
            <Card className='cards'>
                <InputConponent
                    value={data?.cellphone}
                    onChange={handleDatas}
                    name='cellphone'
                    ID_Input='CELL'
                    type='number'
                    style={{
                        background: verifications?.nameTeacher ? colors?.erro : colors?.ok
                    }}
                    nameConponet="Celular do professor"
                />
                <InputConponent
                    value={data?.cpf}
                    onChange={handleDatas}
                    name='cpf'
                    nameConponet="CPF do professor"
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
                        background: verifications?.nameTeacher ? colors?.erro : colors?.ok
                    }}
                    styleSpan={{
                        color:
                            verifications?.nameTeacher ? 'black' : 'white'
                    }}
                    condicional={verifications?.nameTeacher ? 'False' : 'True'}
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
                    Submeter os dados
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