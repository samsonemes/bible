import React from 'react';
import Head from 'next/head';
import Nav from './Navigation';
import Foot from './Footer';

const Layout = ({ children }) =>{
    return(
        <React.Fragment>
        <Head>
            <title>Bible Hope</title>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
        </Head>

        <Nav/>
        <main>
        {children}
        </main>
        
        <Foot/>
    
        </React.Fragment>
    
    )
}

export default Layout;