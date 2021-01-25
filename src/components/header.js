import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/header.css';

export default function Header() {

    return (
        <>
            <Container className="header" id="header">
                <div className="header_coat"></div>
                <Jumbotron fluid className="header_jumbo">
                    <h1>Have a design? Let's animate it.</h1>
                    <p>
                        <br /><br />
                        <span style={{ fontStyle: 'italic', paddingRight: '50%' }}>  </span>
                    </p>
                </Jumbotron>
            </Container>
        </>
    );
}