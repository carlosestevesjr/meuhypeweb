import React, { useState, useEffect } from 'react';

import Link from 'next/link'
import { useRouter } from 'next/router'

//Config
import Config from '../../config/index';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function Tags() {

    // In your components (instead of useRouter)
    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                    <section className='container'>
                        <div className='row'>
                            TAGS
                            <Link href="/tags/5-testando" >
                                <a className="nav-link active" aria-current="page" href="#">Tag</a>
                            </Link>
                        </div>
                    </section>
                </main>
                <Footer></Footer>
            </Layout>
        </>
    )
}
