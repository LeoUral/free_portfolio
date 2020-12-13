import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../style/what.css';
import iconHtml from '../image/social_html5_html_71.png';
import iconSass from '../image/sass_alt_logo_icon_144910.png';
import iconJs from '../image/prog-js02_icon-icons.com_50788.png';
import iconReact from '../image/react_icon_135264.png';



export default function WhatWeDo() {


    return (
        <>
            <Container fluid className="what" >
                <Jumbotron fluid className="what_jumbo" >
                    <div className="what_block" >
                        <h2>Что мы делаем</h2>
                        <div className="what_block_box">
                            <img src={iconHtml} alt="icon" width='60' height="60" />
                            <h4>Верстка html5</h4>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Possimus veritatis illum ad, nesciunt doloremque eos, sint aperiam tempore. </p>
                            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque minus, provident alias inventore earum atque in facilis qui expedita nam molestias molestiae sequi at laboriosam dolorum nemo, eos, iure libero tenetur minima.Omnis tenetur nostrum assumenda at ad illo necessitatibus. </p>
                        </div>
                        <div className="what_block_box">
                            <img src={iconSass} alt="icon" width='60' height="60" />
                            <h4>Стилизация верстки</h4>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Possimus veritatis illum ad, nesciunt doloremque eos, sint aperiam tempore. </p>
                            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque minus, provident alias inventore earum atque in facilis qui expedita nam molestias molestiae sequi at laboriosam dolorum nemo, eos, iure libero tenetur minima.Omnis tenetur nostrum assumenda at ad illo necessitatibus. </p>
                        </div>
                        <div className="what_block_box">
                            <img src={iconJs} alt="icon" width='60' height="60" />
                            <h4>Java script</h4>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Possimus veritatis illum ad, nesciunt doloremque eos, sint aperiam tempore. </p>
                            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque minus, provident alias inventore earum atque in facilis qui expedita nam molestias molestiae sequi at laboriosam dolorum nemo, eos, iure libero tenetur minima.Omnis tenetur nostrum assumenda at ad illo necessitatibus. </p>
                        </div>
                        <div className="what_block_box">
                            <img src={iconReact} alt="icon" width='60' height="60" />
                            <h4>React</h4>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Possimus veritatis illum ad, nesciunt doloremque eos, sint aperiam tempore. </p>
                            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque minus, provident alias inventore earum atque in facilis qui expedita nam molestias molestiae sequi at laboriosam dolorum nemo, eos, iure libero tenetur minima.Omnis tenetur nostrum assumenda at ad illo necessitatibus. </p>
                        </div>

                    </div>
                </Jumbotron>
            </Container>
        </>
    );
}