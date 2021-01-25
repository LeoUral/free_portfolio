import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/header.css';

export default function Header() {

    return (
        <>
            <Container className="header" id="header">
                <div className="header_coat"></div>
                <Jumbotron fluid className="header_jumbo">
                    <h1>bringing your design to life</h1>
                    <p> Ты не можешь ни выйграть, ни проиграть до тех пор, пока ты не участвуешь в гонках.
                        <br /><br />
                        <span style={{ fontStyle: 'italic', paddingRight: '50%' }}> Дэвид Боуи </span>
                    </p>
                </Jumbotron>
            </Container>
        </>
    );
}