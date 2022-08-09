import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

//Config
import Config from '../../config/index';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Layout/Header';
import CardNews from '../../components/CardNews/CardNews';
import CardTagRecent from '../../components/CardTagRecent/CardTagRecent';
import Loader from '../../components/Utilities/Loader';
import Footer from '../../components/Layout/Footer';
import { NewsWrapper, PageTitleWrapper, TagsRecentsWrapper } from '../../styles/globals';

import Slider from "react-slick";
import { light, primary200, primary300, primary500 } from '../../theme';
import Sidebar from '../../components/Layout/Sidebar';
import Messages from '../../components/Layout/Messages';
import { messageDefault } from '../../utils';
import Paginate2 from '../../components/Layout/Paginate2';

export default function Page({responseNews, responsePaginate, currentPage, datas }) {
   
    // console.log(responseNews)
    // console.log('datas',datas)
    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                   
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-9 col-lg-9 col-xl-9 mb-3'>
                                <NewsWrapper id="lita-news">
                                    <div className='container'>
                                        <div className='row'>
                                            
                                            <div>{datas}</div>
                                           
                                            {
                                                ( responseNews.length > 0) ?
                                                    responseNews.map((item, index) => (
                                                        <div key={index} className='col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-3'>
                                                            {<CardNews item={item} ></CardNews>}
                                                        </div>
                                                    ))
                                                    :
                                                    null

                                            }
                                        </div>
                                    </div>
                                </NewsWrapper>
                                <div className='clear-fix'></div>
                                {
                                            
                                    (( responseNews.length > 0)) &&
                                    <Paginate2 dados={responsePaginate} pageCurrent={parseInt(currentPage)}></Paginate2>
                                        
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
export async function getStaticProps (context){
    const pid = context.params.pid;
    // const s = context.params.s;

    let responseNews = []
    let rMessageNews = ""
    let responsePaginate = []

    //News 
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
            'responseNews' :  responseNews,
            'responsePaginate':responsePaginate,
            'currentPage':pid, 
            'datas': new Date().toISOString(),
            'messages':{
                'news':rMessageNews,
            }
        },
        revalidate: 20, // In seconds 
    }
}

export async function getStaticPaths() {

    let rMessageNews = ""

    // //News 
    let totalPages = 0
    await fetch(Config().LOCAL_API_MEUHYPE + 'v1/lista-news?page=1&qtd=24')
    .then((res) => res.json())
    .then((data) => {
        if(data.code === '000'){
            totalPages = data.content.last_page
        }
        
    }).catch(error => {
        rMessageNews = messageDefault
        // throw(error);
    })
   
    // totalPostCount number convert into a array
    let pageIntoArray = Array.from(Array(totalPages).keys())
    // console.log('pageIntoArray', pageIntoArray)

    let paths = []

    pageIntoArray.map(
        path => paths.push({
            params: { pid: `${path + 1}` }
        })
    )

    return {
        paths,
        fallback: false,
    }

}


