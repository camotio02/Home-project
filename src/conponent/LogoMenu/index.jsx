
import { Stack } from '@mui/system'
import './index.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Logo } from '../../conponent/Logo/logo-svg'


export const LogoMenu = () => {
    const [stateMenu, setStateMenu] = useState(false)
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
                        <div>14h</div>
                        <div>30m</div>
                        <div>64s</div>
                    </div>
                </div>
            </div>
        </>
    )
}