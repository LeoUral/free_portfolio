import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/header.css';

export default function Header() {

    return (
        <>
            <Container className="header">
                <Jumbotron fluid>
                    <h1>WORKING  WITH design LAB </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam tempore doloribus, numquam dolore recusandae esse autem cum. Praesentium cum accusamus eaque reiciendis alias ut?</p>
                </Jumbotron>
            </Container>
        </>
    );
}