import { height, padding } from "@mui/system"
import { Link } from "react-router-dom"

export const BackPage = () => {
    return <div
        style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: '0',
            left: '0',
            padding: '5px',
            widt: '4rem',
            height: 'auto',
            background: 'green'

        }}
        className="voltar"><Link to='/modosEntradas'>Voltar</Link></div>
}