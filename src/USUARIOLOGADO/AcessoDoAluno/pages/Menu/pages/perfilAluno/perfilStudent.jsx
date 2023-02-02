import './perfilStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import Qr from '../../../../images/qr.jpg'
import User from '../../../../images/userStudent.jpg'
const camposInfoStudent = [
    { namesCampo: 'GGM', infoCampo: '11223234' },
    { namesCampo: 'RG', infoCampo: '009-23RG' },
    { namesCampo: 'Data de nascimento', infoCampo: '02/10/2000' },
    { namesCampo: 'Válidade de documento', infoCampo: '31/12/2024' },
]
export const CamposInfoStudent = ({
    namesCampo, infoCampo
}) => {
    return (
        <>
            <div className="camposInfo">
                <div>{namesCampo}</div>
                <div>{infoCampo}</div>
            </div>
        </>
    )
}
export const PerfilStudent = () => {
    return (
        <>
            <div className="agenda perfilStudent">
                <div className='containerAgenda'>
                    <Link to='/menuStudent' className="AgendaArrowBack">
                        <ArrowBackIcon fontSize='medium' /> <h4>Perfil</h4>
                    </Link>
                    <div className="avatarName">
                        <img className='avatarStudent' src={User} alt="" />
                        <h3>Tall de Fullano Tall</h3>
                    </div>
                    <div className="infoPerfilStudent">
                        <Card className='infoPerfil'>
                            <div className="qrCodeStudent">
                                <img src={Qr} alt="" />
                            </div>
                            <div className="itensInfoStudent">
                                {
                                    camposInfoStudent.map((item) => (
                                        <CamposInfoStudent key={item.name} {...item} />
                                    ))
                                }
                            </div>
                        </Card>
                        <Card className='infoPerfil'>2</Card>
                    </div>
                </div>
            </div>
        </>
    )
}