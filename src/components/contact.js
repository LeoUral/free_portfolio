import React, { useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/contact.css';
import ModalWindow from './modalWindow';




export default function Contact() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleOffShow = () => setShow(false);

    return (
        <>
            <Container fluid className="contact" >
                <Jumbotron fluid className="contact_jumbo" >
                    <div className="contact_jumbo_block" >
                        <h2> Контакты </h2>
                        <p> Со мной можно связаться несколькими способами, быстрее всего написать в мессенджере. </p>
                        <ModalWindow show={show} offShow={handleOffShow} />
                        <button className="btn_open" onClick={handleShow}>
                            <div className="in_btn">
                                <span>contacts</span>
                            </div>
                        </button>
                    </div>
                </Jumbotron>
            </Container>
        </>
    );
}