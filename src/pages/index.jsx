import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

//Config
import Config from '../config/index';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import CardNews from '../components/CardNews/CardNews';
import CardTag from '../components/CardTag/CardTag';
import Paginate from '../components/Layout/Paginate';
import Loader from '../components/Utilities/Loader';
import Footer from '../components/Layout/Footer';
import { NewsWrapper, TagsRecentsWrapper } from '../styles/globals';

import Slider from "react-slick";
import { light, primary200, primary300, primary500 } from '../theme';
import Sidebar from '../components/Layout/Sidebar';

export default function Home() {

    const [news, setNews] = useState([])
    const [tagsRecents, setTagsRecents] = useState([])
    const [dadosPaginate, setDadosPaginate] = useState(null)
    const [page, setPage] = useState(false)
 
    const [isIsLoadingNews, setIsLoadingNews] = useState(false)
    const [isIsLoadingTags, setIsLoadingTags] = useState(false)
    
    const settings = {
        dots: true,
        slidesToShow: 9,
        slidesToScroll: 5,
        // autoplay: true,
        infinite: false,
        // speed: 10000,
        // autoplaySpeed: 2000,
        focusOnSelect: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 976,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    const buscaPage = (page = 1) => {
        // console.log('buscaPage',page)
        buscaNews(page)
    }

    const buscaPageSearch = (page = 1, search = s) => {
        // console.log('buscaPage',page)
        buscaNewsSearch(page, search)
    }

    async function buscaNewsSearch(page = 1, search = "") {
        setIsLoadingNews(true)
        setNews([])
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/lista-news-search?page=' + page + '&qtd=40'+ '&search='+search)
            .then((res) => res.json())
            .then((data) => {
                // console.log('data' , data.content)
                setNews(data.content.dados)
                setDadosPaginate(data.content)
                setPage(page)
                setIsLoadingNews(false)
            }).catch(error => {
                throw(error);
            })
    }

    async function buscaNews(page = 1) {
        setIsLoadingNews(true)
        setNews([])
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/lista-news?page=' + page + '&qtd=24')
            .then((res) => res.json())
            .then((data) => {
                // console.log('data' , data.content)
                setNews(data.content.dados)
                setDadosPaginate(data.content)
                setPage(page)
                setIsLoadingNews(false)
            }).catch(error => {
                throw(error);
            })
    }

    async function buscaTagsRecents(page = 1) {
        setIsLoadingNews(true)
        setIsLoadingTags(true)
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/lista-tags-recentes?page=' + page )
            .then((res) => res.json())
            .then((data) => {
                // console.log('data' , data.content)
                setTagsRecents(data.content.dados)
                setIsLoadingNews(false)
                setIsLoadingTags(false)
            }).catch(error => {
                throw(error);
            })
    }

    //Ciclo de vida
    // In your components (instead of useRouter)
    const router = useRouter();
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
            //console.log('Router not ready')
            return;
        }

        if(s && s != ""){
            buscaPageSearch(pagina, s)
        }else{
            buscaPage(pagina)
        }
        //console.log(`pagina: ${pagina}`)

    }, [isReady,s]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        // Router.push(`/?pagina=1`)
        // router.prefetch('/')
        buscaTagsRecents(1)
    }, []);

    return (
        <>
            <Header></Header>
            <Layout>
                <main>
                    <TagsRecentsWrapper id="lita-tags-recents">
                        <div className='container'>
                            <h2 className='title-page text-center'>Últimas Notícias</h2>
                        </div>
                        <div className='container'>
                            <div className='d-flex '>
                                <h2 className='title-page text-start'>Tags <br />Recentes</h2>
                                {
                                  
                                    <div id="list-tags">
                                        <div >
                                            
                                            {
                                                isIsLoadingTags ? 
                                                    <Loader width="20%" height="50px" margin="1.5em auto 0 auto"></Loader>
                                                :
                                                    <Slider
                                                        {...settings}
                                                    >
                                                        {
                                                            (tagsRecents.length > 0) ?
                                                                tagsRecents.map((item, index) => (
                                                                    <div key={index}>
                                                                        {<CardTag item={item} ></CardTag>}
                                                                    </div>
                                                                ))
                                                                :
                                                                <p>Não há tags</p>
                                                        }
                                                    </Slider>

                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </TagsRecentsWrapper>
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
                                                        (news.length > 0) ?
                                                            news.map((item, index) => (
                                                                <div key={index} className='col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-3'>
                                                                    {<CardNews item={item} ></CardNews>}
                                                                </div>
                                                            ))
                                                            :
                                                            <div className='mh-shadow bg-message py-2'>
                                                                <p>Não há notícias</p>
                                                            </div>
                                                    }
                                                </div>
                                        }
                                        

                                    </div>
                                </NewsWrapper>
                                <div className='clear-fix'></div>
                                {
                                            
                                    (( news.length > 0)) &&
                                    <Paginate dados={dadosPaginate} buscaPage={(s != undefined)?  buscaPageSearch : buscaPage } search={s} pageCurrent={parseInt(page)}></Paginate>
                                        
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
