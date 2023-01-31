import { LinksBottom } from '../../conponentAcessoAluno/LINKS/linksBottom'
import './frequenciaStudent.css'
import LoopIcon from '@mui/icons-material/Loop';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { Card, Stack } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const frequencia = [
    { materia: 'Geografia', presenca: 10, falta: 0 },
    { materia: 'Artes', presenca: 7, falta: 1 },
    { materia: 'Língua Portuguêsa', presenca: 10, falta: 1 },
    { materia: 'Ciências', presenca: 0, falta: 1 },
]
const Frequencia = ({
    materia, presenca, falta
}) => {
    const verification = falta != 0
    const [faltasForDate, setFaltasForDate] = useState(false)
    const showFaltasDays = () => {
        setFaltasForDate(!faltasForDate)
    }
    return (
        <>
            <Stack className='frequency'>
                <div className='notasStudent frequenciaStudy'>
                    <div>{materia}</div>
                    <div>{presenca}</div>
                    <div>{falta}{
                        verification
                        &&
                        <HelpIcon
                            className='iconFaltas'
                            fontSize='smal'
                            onClick={showFaltasDays}
                        />
                    }
                    </div>
                </div>
                {
                    faltasForDate
                    &&
                    <>
                        <div className="faltasForDays">
                            <div>27/07/2023</div>
                            <div>Conteudo</div>
                        </div>
                        <div className="faltasForDays">
                            <div>27/07/2023</div>
                            <div>Conteudo</div>
                        </div>

                        <div className="faltasForDays">
                            <div>27/07/2023</div>
                            <div>Conteudo</div>
                        </div>

                    </>
                }
            </Stack>
        </>
    )
}
export const FrequenciaInDates = () => {
    const [showFrequencia, setShowFrequencia] = useState(false)
    const show = () => {
        setShowFrequencia(
            true
        )
    }
    const closeshow = () => {
        setShowFrequencia(
            false
        )
    }
    const showFaltas = () => {
        setFaltasForDate(!faltasForDate)
    }
    return (
        <>
            <div className="frequencia">
                <div className='containerFrequencia'>

                    <div className='titlesFrequencia'><h4>Frequência</h4></div>
                    <div className='divShowFrequencia'>
                        exibir por datas
                        <LoopIcon fontSize='small' />
                    </div>
                    <Card className="dadosFrequencia">
                        <div className="showNames">
                            <h5>Bimeste 1</h5>
                            {!showFrequencia
                                ?
                                <ArrowDropDownIcon onClick={show} />
                                :
                                <ArrowDropUpIcon onClick={closeshow} />
                            }
                        </div>
                        {showFrequencia &&
                            <div className="infoNotas">
                                <div className='namesCampo'>
                                    <div></div>
                                    <div>Presença</div>
                                    <div>Faltas</div>
                                </div>
                                {
                                    frequencia.map((frequencia) => (
                                        <Frequencia
                                            key={frequencia.name} {...frequencia}
                                        />
                                    ))
                                }
                            </div>
                        }
                    </Card>
                </div>

                <LinksBottom />
            </div>
        </>
    )
}