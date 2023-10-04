import {Link} from "react-router-dom"

export default function Erro404(){
    return(
        <>
        <div>
            <h1>Essa pagina nao existe</h1>
            <p>Retorne para o inicio <span><Link to="/">INICIO</Link></span></p>
        </div>
        </>
    )
}