import { Link } from "react-router-dom";
import ButtonFatec from "../../components/ButtonFatec1.tsx";
import InputFatec from "../../components/InputFatec1.tsx";

export default function Inicio() {

    return (
        <>
            <h1> Pagina Inicial! </h1>
            <hr/>
            <p>
            Crie as páginas para o projeto: vamos ter uma página inicial com uma breve 
            apresentação do nosso projeto, uma página de contato com o 
            formulário que foi criado na última atividade, 
            uma página “Sobre” comentando sobre quem desenvolveu o projeto 
            e finalmente uma última página que vai listar uma série de tarefas
             sobre o projeto. 
            </p>
            <hr/>
            <Link to='/sobre'>Sobre</Link>
            <p>
            <Link to='/contato'>Contato</Link>
            </p>
            <Link to='/tarefas'>Tarefas</Link>
        </>
    )
}