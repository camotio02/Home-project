import { LinksBottom } from "../LINKS/linksBottom"

export const MainLeyout = ({ children }) => {
    return (
        <>
            {children}
            <LinksBottom />
        </>
    )
}