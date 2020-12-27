import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/header.css';

export default function Header() {

    return (
        <>
            <Container className="header" id="header">
                <div className="header_coat"></div>
                <Jumbotron fluid className="header_jubo">
                    <h1>WORKING  WITH design LAB </h1>
                    <p>Я очень уважаю постепенные преобразования и стараюсь делать нечто подобное в своей жизни, но меня всегда привлекали революционные перемены. Потому что они труднее. Они эмоционально намного напряжённее. И во время таких перемен ты всегда проходишь через период, когда все говорят тебе, что у тебя ничего не получится.
                        <br /><br />
                        <span style={{ fontStyle: 'italic', paddingRight: '50%' }}>Rolling Stone, 16 июня 1994 г.</span>
                    </p>
                </Jumbotron>
            </Container>
        </>
    );
}