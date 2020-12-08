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
                        <h2> Services </h2>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Possimus veritatis illum ad, nesciunt doloremque eos, sint aperiam tempore. </p>
                        <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque minus, provident alias inventore earum atque in facilis qui expedita nam molestias molestiae sequi at laboriosam dolorum nemo, eos, iure libero tenetur minima.Omnis tenetur nostrum assumenda at ad illo necessitatibus. </p>
                    </div>

                </Jumbotron>
            </Container>
        </>
    );
}