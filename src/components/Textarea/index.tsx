import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

// TextareaHTMLA. são todos os atributos que o Textarea pode receber
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string
}
// O rest operator pega todas as outras propriedades que sobrarm
// Dessa forma, podemos utilizar todas as propriedades do Textarea sem ter
// que ficar declarando previamente aqui no component
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  )
}

export default Textarea