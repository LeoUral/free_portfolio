import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/contact.css';
import icon_1 from '../image/instagram_socialnetwork_17393.png';
import icon_2 from '../image/telegram_tile_logo_icon_169640.png';
import icon_3 from '../image/vk_logo_icon_147212.png';
import icon_4 from '../image/Git_icon-icons-blue.com_66557.png';



export default function Contact() {

    return (
        <>
            <Container fluid className="contact" >
                <Jumbotron fluid className="contact_jumbo" >
                    <div className="contact_block" >
                        <h2> Contact us </h2>
                        <p> Со мной можно связаться несколькими способами, быстрее всего написать. </p>
                        <div className="block_links">
                            <a href="#header" target="_blank" rel="noreferrer" className="contact_link" title="Напишите мне в Инстаграмм">
                                <img src={icon_1} alt='icon' />
                            </a>
                            <a href="#header" target="_blank" rel="noreferrer" className="contact_link" title="Напишите мне в Телеграмм">
                                <img src={icon_2} alt='icon' />
                            </a>
                            <a href="#header" target="_blank" rel="noreferrer" className="contact_link" title="Напишите мне в ВК">
                                <img src={icon_3} alt='icon' />
                            </a>
                            <a href="#header" target="_blank" rel="noreferrer" className="contact_link" title="На GIT можно посмотреть мои работы">
                                <img src={icon_4} alt='icon' />
                            </a>
                        </div>

                    </div>
                </Jumbotron>
            </Container>
        </>
    );
}