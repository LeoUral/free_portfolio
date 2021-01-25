import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/what.css';
import iconHtml from '../image/social_html5_html_71.png';
import iconSass from '../image/sass_alt_logo_icon_144910.png';
import iconJs from '../image/prog-js02_icon-icons.com_50788.png';
import iconReact from '../image/react_icon_135264.png';



export default function WhatWeDo() {


    return (
        <>
            <Container fluid className="what" >
                <Jumbotron fluid className="what_jumbo" >
                    <div className="what_block" >
                        <h2>Мои инструменты</h2>
                        <div className="what_block_box">
                            <img src={iconHtml} alt="icon" width='60' height="60" />
                            <h4>html5</h4>
                            <p> В HTML5 реализовано множество новых синтаксических особенностей.  Обогащено симантическое содержание документа. </p>
                            <p> Новшества разработаны для упрощения создания и управления графическими и мультимедийными объектами в сети без необходимости использования сторонних API и плагинов. </p>

                        </div>
                        <div className="what_block_box">
                            <img src={iconSass} alt="icon" width='60' height="60" />
                            <h4>Стилизация верстки, препроцессор</h4>
                            <p> Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей. </p>

                        </div>
                        <div className="what_block_box">
                            <img src={iconJs} alt="icon" width='60' height="60" />
                            <h4>Java script</h4>
                            <p>  Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. </p>
                            <p > JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам. </p>
                        </div>
                        <div className="what_block_box">
                            <img src={iconReact} alt="icon" width='60' height="60" />
                            <h4>React</h4>
                            <p> React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов </p>
                            <p > React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. </p>
                            <p> React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость, простоту и масштабируемость. </p>
                        </div>

                    </div>
                </Jumbotron>
            </Container>
        </>
    );
}