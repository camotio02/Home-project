import './calendaryGrades.css'
import { Card } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const days = [
    {
        semana: 'dom',
        day: '01'
    },
    {
        semana: 'seg',
        day: '02'
    },
    {
        semana: 'ter',
        day: '03'
    },
    {
        semana: 'quar',
        day: '04'
    },
    {
        semana: 'quin',
        day: '04'
    },
    {
        semana: 'sext',
        day: '05'
    },
    {
        semana: 'sab',
        day: '06'
    },
    {
        semana: 'dom',
        day: '01'
    },
    {
        semana: 'seg',
        day: '02'
    },
    {
        semana: 'ter',
        day: '03'
    },
    {
        semana: 'quar',
        day: '04'
    },
    {
        semana: 'quin',
        day: '04'
    },
    {
        semana: 'sext',
        day: '05'
    },
    {
        semana: 'sab',
        day: '06'
    },
]
const Days = ({
    semana,
    day
}) => {
    return (
        <>
            <div className="list">
                <span>
                    {semana}
                </span>
                <span>
                    {day}
                </span>
            </div>
        </>
    )
}
export const CalendaryGrades = () => {
    return (
        <>
            <Card className='calemdaryGrades'>
                <div className="listMonth">
                    <ArrowBackIosIcon />
                    <span>Janeiro de 2023</span>
                    <ArrowForwardIosIcon />
                </div>
                <div className="listDays">
                    {
                        days.map((day) => (
                            <Days key={day.name} {...day} />
                        ))
                    }
                </div>
            </Card>
        </>
    )
}