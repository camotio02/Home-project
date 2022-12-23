import { ComponentID } from "../../Pages/Catasdro/componentID"

export const Verification = ({
    datas,
    Colors
}) => {
    
    return (
        <>
            <div className='itens'>
                <ComponentID ID='NE'
                    style={{
                        background: datas?.erroNameSchool ? Colors?.erro : Colors?.ok
                    }}
                    styleSpan={{
                        color:
                            datas?.erroNameSchool ? 'black' : 'white'
                    }}
                    condicional={datas?.erroNameSchool ? 'False' : 'True'}
                />
                <ComponentID ID='PP'
                    style={{
                        background: !datas?.PU_PA ? Colors?.erro : Colors?.ok
                    }}
                    styleSpan={{
                        color:
                            !datas?.PU_PA ? 'black' : 'white'
                    }}
                    condicional={!datas?.PU_PA ? 'False' : 'True'}
                />
                <ComponentID ID='MD'
                    style={{
                        background: !datas?.modulo ? Colors?.erro : Colors?.ok
                    }}
                    styleSpan={{
                        color:
                            !datas?.modulo ? 'black' : 'white'
                    }}
                    condicional={!datas?.modulo ? 'False' : 'True'}

                />
                <ComponentID ID='CEP'
                    style={{
                        background: datas?.cep ? Colors?.erro : Colors?.ok
                    }}
                    styleSpan={{
                        color:
                            datas?.cep ? 'black' : 'white'
                    }}
                    condicional={datas?.cep ? 'False' : 'True'}
                />

            </div>
        </>
    )
}