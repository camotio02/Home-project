import { LinksBottom } from '../../conponentAcessoAluno/LINKS/linksBottom'
import './HomePage.css'
import { Card } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { FrequenciaConponent } from '../../conponentAcessoAluno/FREQUENCIA/frequencia';
import { useState } from 'react';
import { UltimosDiasFaltados } from '../../conponentAcessoAluno/ULTIMOSDIASFALTADOS/uldiasfaltados';
import { Avisos } from '../../conponentAcessoAluno/AVISOS/avisos';
export const HomePageStudent = () => {
    const [showItens, setShowItens] = useState(false)

    const closeItens = () => {
        setShowItens(false)
    }
    const openItens = () => {
        setShowItens(true)
    }
    const scroolls = (scrollY) => {
        if (documentElement.scrollY  > 0) {
            setShowItens(true)
            console.log(scrollY)
        } else {
            setShowItens(false)
            console.log(scrollY)
        }
    }

    return (
        <>
            <div className="dashboardStudent" onScroll={scroolls}>
                <div className="student" >
                    <div className="alerts">
                        <NotificationsIcon fontSize='large' />
                    </div>
                    {showItens && <div className="after">
                        <div className="alerts">
                            <NotificationsIcon fontSize='large' />
                        </div>
                    </div>}

                    <h2 className='namesUser'>Olá Nome estudante!</h2>
                    <Card className='cardsStudent'>
                        <h5>Frequência</h5>
                        <div className="linerItem">
                            <FrequenciaConponent />
                        </div>
                        <h6>Informações recentes</h6>
                        {showItens &&
                            <div className="BottomLinearItem">
                                <UltimosDiasFaltados />
                            </div>}
                        <div className='arrow'>
                            {showItens
                                ? <ArrowDropUpIcon
                                    onClick={closeItens}
                                    fontSize='large'
                                />
                                : < ArrowDropDownIcon
                                    onClick={openItens}
                                    fontSize='large'
                                />
                            }
                        </div>
                    </Card>
                    <Card className="todayClass">
                        <div className="classe">
                            <h5>Aulas de hoje</h5>
                            <h5>24 jan</h5>
                        </div>
                        <div className="aulas">
                            Nenhum horário encontrado
                        </div>
                    </Card>
                    <div className="listaAvisos">
                        <h4>Últimos Avisos</h4>
                        <div className="avisos">
                            <Avisos />
                        </div>
                        <div className='showmore'>Ver Todos</div>
                    </div>
                    <LinksBottom/>
                </div>
            </div>
        </>
    )
}
 // function onScroll() {
    //     showNavOnScroll()
    //     showBackToTopButtonOnScroll()
    // }
    // window.addEventListener('after', onScroll)
    // function showNavOnScroll() {
    //     if (scrollY !=null) {
    //         setShowItens(true)
    //     } else {
    //         setShowItens(false)
    //     }
    // }

    // function showBackToTopButtonOnScroll() {
    //     if (scrollY !=null) {
    //         setShowItens(true)
    //     } else {
    //         setShowItens(false)
    //     }
    // }