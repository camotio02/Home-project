import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const ButtonsConponent = ({
    fullWidth1,fullWidth2,
    variante1,variante2,
    onClick1,onClick2,
    color1, colortwo,
    title1,title2,
    indo1,indo2,
}) => {
    return (
        <>

            <div className='stackButtons'>
                <Button
                    fullWidth={fullWidth1}
                    variant={variante1}
                    onClick={onClick1}
                    color={color1}
                >
                    <Link to={indo1}>
                        {title1}
                    </Link>
                </Button>
                <Button
                    fullWidth={fullWidth2}
                    onClick={onClick2}
                    variant={variante2}
                    color={ colortwo}
                >
                    <Link to={indo2}>
                        {title2}
                    </Link>
                </Button>

            </div>
        </>
    )
}