import { LinksProfConpinent } from '../../conponentAcessoProfessor/LINKSPROF/linkProf'
import './HomePage.css'
import { Card } from '@mui/material';

export const HomePageProf = () => {
    return (
        <>
            <div className="containerProf">
                <div className="logoProf">
                    <h4>Olá prof, Fullano de tall...</h4>
                </div>
                <Card className="linksProf">
                    <LinksProfConpinent/>
                </Card>
            </div>
        </>
    )
}