export const ComponentID = ({
    style,
    condicional,
    styleSpan,
    ID
}) => <>
        <div
            className="div">
            <div
                className="div-dois"
                style={style}
            >{ID}
            </div>
            <span style={styleSpan} >{condicional}</span>
        </div>
    </>