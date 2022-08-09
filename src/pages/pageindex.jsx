import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

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


export default function MountNews({responseNews, responsePaginate, page, messages}) {
    console.log('pagina', page)
    
    //Ciclo de vida
    // In your components (instead of useRouter)
    const router = useRouter();
    return (
        <>
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
                            <div className='col-sm-12 col-md-9 col-lg-9 col-xl-9 mb-3'>
                                <NewsWrapper id="lita-news">
                                    <div className='container'>

                                        <div className='row'>
                                            {
                                                ( responseNews.length > 0) ?
                                                responseNews.map((item, index) => (
                                                        <div key={index} className='col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-3'>
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
                                            
                                    (( responseNews.length > 0)) &&
                                    <Paginate2 dados={responsePaginate} pageCurrent={parseInt(page)}></Paginate2>
                                        
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


