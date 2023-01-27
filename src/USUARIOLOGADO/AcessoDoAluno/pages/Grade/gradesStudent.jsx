import './gradesStudent.css'
import { Card, Stack } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { CalendaryGrades } from '../../conponentAcessoAluno/CALENDARYGRADES/calendaryGrades';
import { LinksBottom } from '../../conponentAcessoAluno/LINKS/linksBottom';

export const GradesStudent = () => {
    return (
        <>
            <div className="grades">
                <LinksBottom />
                <div className='containerGrades'>
                    <div className='titlesgrades'><h4>Grades</h4></div>
                    <Stack className="datas">
                        <div>
                            Hoje, 25 de Janeiro de 2023
                            <EventIcon />
                        </div>
                    </Stack>
                    <Card className='calemdaryGrades'>
                        <CalendaryGrades />
                    </Card>
                </div>
            </div>
        </>
    )
}