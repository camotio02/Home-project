import './index.css'
import { Input as Inputs, Stack } from '@mui/material'

export const InputConponent = ({
    nameConponet,
    fullWidth,
    ID_Input,
    style,
    error,
    ...props
}) => {
    return (<>
        <div
            style={style}
            className='Stack-sapn-input'>
            <span className='titleInput'>{nameConponet}</span>
            <div className='input-id'>
                <Inputs
                    sx={{ color: 'white' }}
                    className='input'
                    fullWidth={fullWidth}
                    {...props}
                />
                <div className='id'>{ID_Input}</div>
            </div>
            <span className='error'>{error}</span>
        </div>
    </>)
}