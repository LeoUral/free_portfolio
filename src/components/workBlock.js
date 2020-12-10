import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/workBlock.css';

export default function WorkBlock(props) {

    return (
        <>
            <Card className="work_block" style={{ width: '610px', backgroundImage: `url(${props.urlImg})` }}>
                <a href={props.url} className="work_link" target="_blank" rel="noreferrer">
                    <span><h3>{props.title}</h3></span>
                    <div className="work_cover">
                        <span>{props.text}</span>
                    </div>
                </a>
            </Card>
        </>
    );
}