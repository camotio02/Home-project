import './avisos.css'
const avisos = [
    {
        day: '30',
        month: 'Jan',
        description: 'A divulgação dos resultados já foi feita, faça a sua matricula enqunado tem tempo!'
    },
    {
        day: '24',
        month: 'Dez',
        description: 'A divulgação dos resultados já foi feita, faça a sua matricula enqunado tem tempo!'
    }
]
export const ShowContAvisos = (
    { day, month, description }
) => {
    return (
        <>
            <div className="showContAvisos">
                <div>
                    <div>{day}</div>
                    <div>{month}</div>
                </div>
                <div>{description}</div>
            </div>
        </>
    )
}
export const Avisos = () => {
    return (
        <>
            {
                avisos.map((aviso) => (
                    <ShowContAvisos key={aviso.name}{...aviso} />
                ))
            }
        </>
    )
}