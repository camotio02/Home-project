import './uldiasfaltados.css'
const ultimosdiasflatados = [
    {
        data: '24/12(sext)',
        materia: 'Geografia'
    },
    {
        data: '24/12(sext)',
        materia: 'Ciências'
    },
    {
        data: '24/12(sext)',
        materia: 'Artes'
    },
    {
        data: '24/12(sext)',
        materia: 'Biologia'
    },
    {
        data: '24/12(sext)',
        materia: 'E.Fisiica'
    },
]
export const Diasflatados = (
    { data, materia }
) => {
    return (
        <>
            <div className="lineardias">
                <div>
                    {data}
                </div>
                <div>{materia}</div>
            </div>
        </>
    )
}

export const UltimosDiasFaltados = () => {
    return (
        <>
            <div className="UltimosDiasFaltadostas">
                {
                    ultimosdiasflatados.map((item) => (
                        <Diasflatados key={item.name} {...item} />
                    ))
                }
            </div>
        </>
    )
}