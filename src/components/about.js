import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/about.css';

export default function About() {


    return (
        <>
            <Container fluid className="about" >
                <Jumbotron fluid className="about_jumbo" >
                    <div className="about_block" >
                        <h2> Обо мне </h2>
                        <p>Меня зову Леонид Кудряшов.<br />
                         Занимаюсь созданием сайтов с 2019 года, обучение проходил удаленно в GeekBrains. </p>
                        <p>Сайты создаю с использованием HTML5, CSS3, предпроцессоров SASS и LESS. Обязательно использую JS.<br />  Последнее время больше стал увлекаться написанием сайтов на REACT. </p>

                    </div>
                </Jumbotron>
            </Container>
        </>
    );
}