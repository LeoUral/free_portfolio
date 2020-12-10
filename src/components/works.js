import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import '../style/work.css';
import WorkBlock from './workBlock';
import DATA_WORK from './dataWork';

export default class Works extends React.Component {

    render() {
        const workArr = [];

        DATA_WORK.forEach((data) => {
            workArr.push(
                <Fragment key={data.id}>
                    <WorkBlock
                        url={data.url}
                        title={data.title}
                        text={data.text}
                        urlImg={data.urlImg} />
                </Fragment>
            );
        });
        console.log(workArr);

        return (
            <>
                <Container className="work">
                    {workArr}
                </Container>
            </>
        );
    }
}