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

export default function Canais() {

    const [channels, setChannels] = useState([])
    const [dadosPaginate, setDadosPaginate] = useState(null)
    const [page, setPage] = useState(false)

    const router = useRouter()
    const { cid, slug } = router.query

    const buscaPage = (page = 1) => {
        // console.log('buscaPage',page)
        buscaChannels(page)
    }

    async function buscaChannels(page = 1) {
        // console.log('chama', page)
        setIsLoadingNews(true)
        setChannels([])
       
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/lista-channels?page=' + page + '&qtd=24' )
            .then((res) => res.json())
            .then((data) => {
                // console.log('data', data.content)
                setChannels(data.content.dados)
                setDadosPaginate(data.content)
                setPage(page)
                setIsLoadingNews(false)
            }).catch(error => {
                setIsLoadingNews(false)
                setMessages(prevState => ({
                    ...prevState,
                    channels: messageDefault
                }));
                // throw(error);
            })
    }


    const [messages, setMessages] = useState({
        'channels':''
    })
    
    const [isIsLoadingNews, setIsLoadingNews] = useState(false)

    // In your components (instead of useRouter)
  
    // console.log('router.query',router.query)

    const {
        isReady,
        query: {
            pagina,
            s
        }
    } = router;

    useEffect(() => {
        //Monta Parametro para requisição
        if (!isReady) {
            return;
        }
        if(pagina){
            buscaPage(pagina)
        }else{
            buscaPage(1)
        }
       
      
    }, [isReady, cid ]); // eslint-disable-line react-hooks/exhaustive-deps
    

    // In your components (instead of useRouter)
    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                    <div className='container'>
                        <PageTitleWrapper>
                            <h2 className='title-page-geral py-4 text-left'>CANAIS</h2>
                            <p className='py-0 px-2 mb-5'>
                                Listando canais
                            </p>
                        </PageTitleWrapper>
                    </div>
                    <div className='container'>
                        <div id="lita-canais">
                            {
                                (isIsLoadingNews) ?
                                    <Loader width="20%" height="100px" margin="0 auto"></Loader>
                                    :
                                    <div className='row'>
                                        {
                                            ( channels.length > 0) ?
                                                channels.map((item, index) => (
                                                    <div key={index} className='col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-3'>
                                                        {<CardChannels item={item} ></CardChannels>}
                                                    </div>
                                                ))
                                                :
                                                <Messages message={messages.channels} />

                                        }
                                    </div>
                            }
                        </div>
                        
                        <div className='clear-fix'></div>
                        {
                            (( channels.length > 0)) &&
                            <Paginate dados={dadosPaginate} buscaPage={buscaPage } search={s} pageCurrent={parseInt(page)}></Paginate>
                        }
                    </div>
                </main>
                <Footer></Footer>
            </Layout>
        </>
    )
}
