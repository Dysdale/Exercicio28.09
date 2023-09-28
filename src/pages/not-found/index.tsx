import { Link } from "react-router-dom"

export default function NotFound (){

    return (
        <>
        <h1>Procura Outra porque essa não existe</h1>
        <p> A URL DIGITADA não vai dar</p>
        <hr/>
        <Link to='/'>Voltar para home</Link>
        </>
    )
}