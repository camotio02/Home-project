import { LinksProfConpinent } from '../../conponentAcessoProfessor/LINKSPROF/linkProf'
import './HomePage.css'
import { Card } from '@mui/material';
import { useState } from 'react';


export const HomeTeacher = () => {
   
    return (
        <>
            <div className="containerProf">
                <div className="logoProf">
                    <h4>Olá prof, Fullano de tall...</h4>
                </div>
                <Card className='centerInfoProf'>
                    Agora
                </Card>
                
                <Card className="linksProf">
                    <LinksProfConpinent />
                </Card>
            </div>
        </>
    )
}