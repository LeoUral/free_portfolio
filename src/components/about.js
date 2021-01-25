import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/about.css';

export default function About() {


    return (
        <>
            <Container fluid className="about" >
                <Jumbotron fluid className="about_jumbo" >
                    <div className="about_block" >
                        <h2> О себе </h2>
                        <p>Меня зову Леонид Кудряшов.
                         Занимаюсь созданием сайтов с 2019 года, обучение проходил в GeekBrains. </p>
                        <p>При создании сайтов использую HTML5, CSS3, предпроцессоры SASS и LESS. <br />
                         Необходится и без написания программ на JavaScript.<br />
                          Последнее время больше стал использовать при написании сайтов библиотеку REACT. </p>
                    </div>
                </Jumbotron>
            </Container>
        </>
    );
}