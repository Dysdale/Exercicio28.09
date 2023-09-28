import { Link } from "react-router-dom";
import './index.css'
import InputFatec2 from "../../components/inputs/InputFatecExercicio";
import ButtonFatec from "../../components/ButtonFatec/ButtonFatec";
export default function Contatos(){
    return(
        <>
           <h1>Contatos</h1>
            <p>
            Aqui você pode entrar em contato conosco
            </p>
            <InputFatec2 type='string' placeholder='Nome'className="usred-placeholder"/>
            <p>
          <InputFatec2 type='string' placeholder='E-mail'/>
        </p>
          <InputFatec2 type='string' placeholder='Telefone'/>
         <p>
            
         </p>
          <ButtonFatec type='submit' label='Fatec: Enviar mensagem'/>

            <hr/>
            <Link to='/'>Inicio</Link>
            <p>
            <Link to='/sobre'>Sobre</Link>
            </p>
            <Link to='/tarefas'>Tarefas</Link>
        </>
    )
}
