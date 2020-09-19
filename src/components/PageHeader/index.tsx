import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css'

interface PageHeaderProps {
  title: string;
  description?: string;
}
// Basicamente o React Functional Component mostra 
// as propriedades que o nosso componente (PageHeader) tem 
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Logo" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {/* quando utilizamos o &&, a segunda parte da operação 
        só é executada se a primeira parte for verdadeira */}
        {props.description && <p>{props.description}</p>}
        {props.children}
      </div>

    </header>
  )
}

export default PageHeader