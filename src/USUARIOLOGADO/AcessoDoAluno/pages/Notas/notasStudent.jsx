import { LinksBottom } from '../../conponentAcessoAluno/LINKS/linksBottom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './notasStudent.css'
import { Card, Stack } from '@mui/material';
import { FrequenciaConponent } from '../../conponentAcessoAluno/FREQUENCIA/frequencia';
import { useState } from 'react';
const notas = [
    { bimestre: '1º Bimestre', nota: '10.0', falta: '0' },
    { bimestre: '2º Bimestre', nota: '10.0', falta: '0' },
]
const Notas = ({
    bimestre, nota, falta
}) => {
    return (
        <>
            <Stack className='infosNotasStudent'>
                <div className='notasStudent'>
                    <div>{bimestre}</div>
                    <div>{nota}</div>
                    <div>{falta}</div>
                </div>
            </Stack>
        </>
    )
}
export const NotasStudent = () => {
    const [showNotas, setShowNotas] = useState(false)
    const show = () => {
        setShowNotas(
            true
        )
    }
    const closeshow = () => {
        setShowNotas(
            false
        )
    }
    return (
        <>
            <div className="notas">
                <div className='containerNotas'>
                    <div className='titlesnotas'><h4>Notas</h4></div>
                    <Card className="dadosNotas">
                        <div className="showNames">
                            <h5>Geografia</h5>
                            {!showNotas
                                ?
                                <ArrowDropDownIcon onClick={show} />
                                :
                                <ArrowDropUpIcon onClick={closeshow} />
                            }
                        </div>
                        {showNotas && <div className="infoNotas">
                            <div className='namesCampo'>
                                <div>PERÍODOS</div>
                                <div>NOTAS</div>
                                <div>FALTAS</div>
                            </div>
                            {
                                notas.map((nota) => (
                                    <Notas key={nota.name} {...nota} />
                                ))
                            }
                            <Stack className='notasPorMateria'>
                                <h5>Frequência</h5>
                                <div className="linerItem">
                                    <FrequenciaConponent />
                                </div>
                            </Stack>
                        </div>}
                    </Card>
                    
                </div>
                <LinksBottom />
            </div>
        </>
    )
}