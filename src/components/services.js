import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/services.css';

export default function Services() {


    return (
        <>
            <Container className="services" >
                <Jumbotron fluid className="services_jumbo">
                    <div className="substrate"></div>
                    <div className="services_block" >
                        <h2> Услуги </h2>
                        <p > Написание, верстка, создание сайтов для бизнеса, лендинг, сайт-визитка, корпоративный сайт, сайт катлог. Адаптивная, кросс-браузерная верстка сайтов, а также мобильная версия. </p>
                    </div>

                </Jumbotron>
            </Container>
        </>
    );
}