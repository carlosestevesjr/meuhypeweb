import React, { useState, useEffect } from 'react';

import Link from 'next/link'
import { useRouter } from 'next/router'

//Config
import Config from '../../config/index';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import { PageTitleWrapper } from '../../styles/globals';
import CardChannels from '../../components/CardChannels/CardChannels';
import Messages from '../../components/Layout/Messages';
import { CardChannelsWrapper } from '../../components/CardChannels/Styles';
import { messageDefault } from '../../utils';
import Paginate from '../../components/Layout/Paginate';
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Utilities/Loader';

export default function Pages() {

  
    // In your components (instead of useRouter)
    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                   <div>Teste</div>
                </main>
                <Footer></Footer>
            </Layout>
        </>
    )
}
