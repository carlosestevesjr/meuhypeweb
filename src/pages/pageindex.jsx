import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router'

//Config
import Config from '../config/index';

import CardNews from '../components/CardNews/CardNews';

import { NewsWrapper, PageTitleWrapper } from '../styles/globals';

import Messages from '../components/Layout/Messages';
import Header from '../components/Layout/Header';
import Layout from '../components/Layout/Layout';
import Paginate2 from '../components/Layout/Paginate2';
import Sidebar from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';
import Loader from '../components/Utilities/Loader';


export default function MountNews({responseNews, responsePaginate, page, messages}) {
   
    const [news, setNews] = useState([])
    const [isLoadingNews, setIsLoadingNews] = useState(false)

    useEffect( () => {
        const tempPosts =  responseNews ;
        setNews(tempPosts);
        
    }, []);
    
    Router.events.on("routeChangeStart", () => {
        setIsLoadingNews(true)
        console.log("Route is start ...")
    })

    Router.events.on("routeChangeComplete", () => {
        setIsLoadingNews(false)
        console.log("Route is changing is complete ...")
    })

  
  
    //Ciclo de vida
    // In your components (instead of useRouter)
  
     return(
        <>
            { ( isLoadingNews) &&
                 <div >Loading</div>
            }
            <Header></Header>
            <Layout>
                <main>
                    <PageTitleWrapper>
                        <div className='container'>
                            <h2 className='title-page-initial text-center'>getServerSideProps</h2>
                        </div>
                    </PageTitleWrapper>
                   
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3'>
                                <NewsWrapper id="lita-news">
                                    <div className='container'>

                                        <div className='row'>
                                            {
                                                ( news.length > 0) ?
                                                news.map((item, index) => (
                                                        <div key={index} className='col-sm-12 col-md-12 col-lg-6 col-xl-3 mb-3'>
                                                            {<CardNews item={item} ></CardNews>}
                                                        </div>
                                                    ))
                                                    :
                                                    <Messages message={messages.news} />

                                            }
                                        </div>

                                    </div>
                                </NewsWrapper>
                                <div className='clear-fix'></div>
                                {
                                            
                                    (( news.length > 0)) &&
                                    <Paginate2 dados={responsePaginate} pageCurrent={parseInt(page)}></Paginate2>
                                        
                                }
                            </div>
                          
                        </div>
                    </div>
                   
                </main>
                <Footer></Footer>
            </Layout>
        </>
    )
   
}

// This gets called on every request
export async function getServerSideProps({ query: { pid = 1} }){

    let responseNews = []
    let rMessageNews = ""
    let responsePaginate = []

    await fetch(Config().LOCAL_API_MEUHYPE + 'v1/lista-news?page='+pid+'&qtd=24')
    .then((res) => res.json())
    .then((data) => {
        if(data.code === '000'){
            responseNews = data.content.dados
            responsePaginate = data.content
        }else{
            return null
        }
        
    }).catch(error => {
        rMessageNews = messageDefault
        // throw(error);
    })

    await new Promise((resolve) => {
        setTimeout(resolve, 8000);
    })

    // Pass data to the page via props
    return { 
        props: {
            'page': parseInt(pid),
            'responseNews' :  responseNews,
            'responsePaginate':responsePaginate,
            'messages':{
                'news':rMessageNews,
            }
        } 
    }
}


