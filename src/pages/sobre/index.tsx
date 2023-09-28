import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <>
        <h1>Sobre</h1>
            <p>
            Este software foi desenvolvido pelo Diego Cruz, apesar de não saber nada de Javascript ou ter feito a materia semestre passado esta tentando...
            </p>
            
            <hr/>
            <Link to='/'>Inicio</Link>
            <p>
            <Link to='/contato'>Contato</Link>
            </p>
            <Link to='/tarefas'>Tarefas</Link>
            <p></p>
        </>
    )
}