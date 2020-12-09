import React from 'react';
import About from './about';
import Header from './header';
import Services from './services';
import WhatWeDo from './whatWeDo';
import Works from './works';

export default function Home() {


    return (
        <>
            <Header />
            <About />
            <Services />
            <WhatWeDo />
            <Works />
        </>
    );
}