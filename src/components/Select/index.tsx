import React, { SelectHTMLAttributes } from 'react';

import './styles.css'

// SelectHTMLA. são todos os atributos que o Select pode receber
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>
}
// O rest operator pega todas as outras propriedades que sobrarm
// Dessa forma, podemos utilizar todas as propriedades do Select sem ter
// que ficar declarando previamente aqui no component
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}

export default Select