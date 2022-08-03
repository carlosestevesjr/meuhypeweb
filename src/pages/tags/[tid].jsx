import React, { useState, useEffect } from 'react';

import Link from 'next/link'
import Router, { useRouter } from 'next/router'

//Config
import Config from '../../config/index';
import Layout from '../../components/Layout/Layout';
import CardNews from '../../components/CardNews/CardNews';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import { NewsWrapper, PageTitleWrapper } from '../../styles/globals';
import Messages from '../../components/Layout/Messages';
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Utilities/Loader';
import { messageDefault } from '../../utils';
import Paginate from '../../components/Layout/Paginate';

export default function Tag() {

    const [news, setNews] = useState([])
    const [dadosPaginate, setDadosPaginate] = useState(null)
    const [page, setPage] = useState(false)

    const router = useRouter()
    const { tid, slug } = router.query

    const buscaPage = (page = 1) => {
        // console.log('buscaPage',page)
        buscaNews(page)
    }

    async function buscaNews(page = 1) {
        // console.log('chama', page)
        setIsLoadingNews(true)
        setNews([])
       
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/lista-news-tag/'+tid+'?page=' + page + '&qtd=24' )
            .then((res) => res.json())
            .then((data) => {
                // console.log('data' , data.content)
                setNews(data.content.dados)
                setDadosPaginate(data.content)
                setPage(page)
                setIsLoadingNews(false)
            }).catch(error => {
                setIsLoadingNews(false)
                setMessages(prevState => ({
                    ...prevState,
                    news: messageDefault
                }));
                // throw(error);
            })
    }


    const [messages, setMessages] = useState({
        'news':'',
        'tagsRecents':''
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
       
      
    }, [isReady, tid ]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                <div className='container'>
                    <PageTitleWrapper>
                        <h2 className='title-page text-center'>Tag </h2>
                    </PageTitleWrapper>
                </div>
                <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-9 col-lg-9 col-xl-9 mb-3'>
                                <NewsWrapper id="lita-news">
                                    <div className='container'>
                                        {
                                            (isIsLoadingNews) ?
                                                <Loader width="20%" height="100px" margin="0 auto"></Loader>
                                                :
                                                <div className='row'>
                                                    {
                                                        ( news.length > 0) ?
                                                            news.map((item, index) => (
                                                                <div key={index} className='col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-3'>
                                                                    {<CardNews item={item} ></CardNews>}
                                                                </div>
                                                            ))
                                                            :
                                                            <Messages message={messages.news} />

                                                    }
                                                </div>
                                        }
                                        

                                    </div>
                                </NewsWrapper>
                                <div className='clear-fix'></div>
                                {
                                    (( news.length > 0)) &&
                                    <Paginate dados={dadosPaginate} buscaPage={buscaPage } search={null} pageCurrent={parseInt(page)}></Paginate>
                                }
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3'>
                                <Sidebar>

                                </Sidebar>
                            </div>
                        </div>
                    </div>
                   
                </main>
                <Footer></Footer>
            </Layout>
        </>
    )
}
