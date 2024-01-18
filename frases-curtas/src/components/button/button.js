import './button.css'
const mensage = ()=>{
    alert("A label desse botão é Baixar Cv")
}

const Button = (props) =>{
    return <button className="botao" onClick={mensage}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button