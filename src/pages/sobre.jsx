import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

//Config
import Config from '../config/index';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { PageTitleWrapper } from '../styles/globals';

export default function Sobre() {

    // In your components (instead of useRouter)
   
    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                    <div className='container'>
                        <PageTitleWrapper>
                            <h2 className='title-page text-center'>SOBRE</h2>
                        </PageTitleWrapper>
                    </div>
                </main>
                <Footer></Footer>
            </Layout>
        </>
    )
}
