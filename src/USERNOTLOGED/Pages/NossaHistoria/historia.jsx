import './historia.css'
import { LogoMenu } from '../../conponent/LogoMenu'
import { LinksPage } from '../../conponent/Links/links'
import { Logo } from '../../conponent/Logo/logo-svg'
export const Historia = () => {
    const boderRadiusBottom = '5px solid rgba(234, 105, 0, 0.1)'
    return (
        <>
            <div className='history'>
                <LogoMenu />
                <LinksPage />
                <div className='pageTop'>
                    <strong>Electronic Control School</strong>
                    <p>
                        A ECS teve como iniciativa, como um projeto
                        que visa e manter o control das escolas de moçambique,
                        sabendo que estas não têm condições sufucientes para
                        para manter o prejeto, mesmo assim decidimos ajudar
                        com este custo: <span>'Ajudar as escolas a se manter sempre em control dos seus
                            dados e alunos.'</span>
                        <br />
                        Esperamos que o projeto seja um sucesso, e que ajude muito
                        nas escolas, pois haverá regularidade de frautes, como:
                        <span>Vendas de notas dos alunos</span>,
                        <span>Passagens não aprovadas, logicamente</span>,
                        <span>Baixa consideração da frequência dos alunos.</span>
                        <br />
                        Como objetivos, estes são os nossos pontos de vistas educacional
                        em moçambique, se o projeto for aprovado pelo governo, iremos
                        dar as aulas de como mexer com os dados 100%
                    </p>
                </div>
            </div>
        </>
    )
}