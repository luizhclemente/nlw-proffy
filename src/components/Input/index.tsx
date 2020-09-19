import React, { InputHTMLAttributes } from 'react';

import './styles.css'

// InputHTMLA. são todos os atributos que o input pode receber
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string
}
// O rest operator pega todas as outras propriedades que sobrarm
// Dessa forma, podemos utilizar todas as propriedades do input sem ter
// que ficar declarando previamente aqui no component
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input