import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/workBlock.css';

export default function WorkBlock() {


    return (
        <>
            <Card className="work_block" style={{ width: '18rem' }}>
                <a href="#header" className="work_link">
                    {/* <span>Сылка куда то туда</span> */}
                    <div className="work_cover">
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quia.</span>
                    </div>
                </a>
            </Card>
        </>
    );
}