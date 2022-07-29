import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

//Config
import Config from '../config/index';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export default function Contato() {

    // In your components (instead of useRouter)
   
    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                    <section>
                        
                    </section>
                </main>
                <Footer></Footer>
            </Layout>
        </>
    )
}
