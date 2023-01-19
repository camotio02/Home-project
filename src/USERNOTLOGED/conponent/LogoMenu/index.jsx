
import { Stack } from '@mui/system'
import './index.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { Logo } from '../../conponent/Logo/logo-svg'
import { Time } from '../Time/time';


export const LogoMenu = () => {
    const [time, setTime] = useState(new Date())
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const day = time.getDay()
    const addZero = (value) => value < 10 ? `0${value}` : value

    const very = () => {

    }
    useEffect(() => {
        setInterval(() => {
            setTime(new Date()), 1000
        }
        )
    }, [])

    return (
        <>
            <div className="LogoMenu">
                <MenuIcon fontSize='large' className='iconsMenu' />
                <Logo />
                <div className='hours'>
                    <Stack className="time">
                        Time Global
                    </Stack>
                    <div className="times">
                        <Time />
                        <span>{ }</span>
                    </div>
                </div>
            </div>
        </>
    )
}