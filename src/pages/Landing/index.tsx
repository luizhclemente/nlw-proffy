import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Landing() {
    const [totalConections, setTotalConnections] = useState(0);

    // 1° parametro q ela recebe é uuma função
    // 2°: array de dependências. Informações que quando forem
    // alteradas, dispararão a arrow function (1° parametro)
    // O array ficara vazio pois queremos que a função seja executada
    // uma unica vez, assim que o componente for exibido em tela
    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                       Estudar
                   </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>
                </div>


                <span className="total-connections">
                    Total de {totalConections} conexões já realizadas. <img src={purpleHeartIcon} alt="Coração" />
                </span>
            </div>
        </div>
    )
}