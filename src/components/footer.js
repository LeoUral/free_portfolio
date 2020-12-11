import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/footer.css';

export default function Footer() {

    return (
        <>
            <Container className="footer" >
                <Jumbotron fluid className="footer_jumbo">
                    <div className="substrate"></div>
                    <div className="footer_block" >
                        <p> Leonid Kudryashov 2020 <span> made on REACT</span></p>
                    </div>
                </Jumbotron>
            </Container>
        </>
    );
}
