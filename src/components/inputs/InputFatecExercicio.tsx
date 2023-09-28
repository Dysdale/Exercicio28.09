import stiles from './inputs.module.css'
interface Props {
  type: string
  placeholder: string;
}

function InputFatec2({ type, placeholder }: Props) {
    return (
    /*<input type={type} placeholder={placeholder} />*/
        <input  className={stiles.inputs} type={type} placeholder={placeholder}/>
  );
}

export default InputFatec2;