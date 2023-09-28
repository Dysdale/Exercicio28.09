import { Link } from "react-router-dom";

export default function Tarefas(){
    return(
        <>
        <h1>Tarefas</h1>
            <p>
            * Definir Estruturas
            </p>
            * Criar Paginas
            <p>
            * Aprender typescript
            </p>
            * Criar lista de tarefas
            <p>
            
            
            <Link to='/'>Inicio</Link>
            </p>
            
            <Link to='/contato'>Contato</Link>
            <p>
            <Link to='/sobre'>Sobre</Link>
            </p>
            
            
        </>
    )
}