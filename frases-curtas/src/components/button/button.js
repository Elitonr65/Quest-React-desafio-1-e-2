import './button.css'
const message = (props)=>{
    alert(`A label desse botão é ${props}`)
}

const Button = (props) =>{
    return <button className="botao" onClick={() => message('Baixar CV')}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button