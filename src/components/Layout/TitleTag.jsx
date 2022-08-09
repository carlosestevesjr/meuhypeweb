import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import ContentLoader, { Facebook } from 'react-content-loader'
import {formataDataBr, retornaTypeNews} from '../../utils/index'
import Router, { useRouter } from 'next/router'

//Config
import Config from '../../config/index'
import {BtnTag, BtnGo, TitleChannelWrapper, TitleTagWrapper } from './../../styles/globals'
import { corDestaque, fontSize12} from '../../theme';
import Loader from '../Utilities/Loader';
import Link from 'next/link';
import Messages from './Messages';

export default function TitleTag({tid}){

    const [tag, setTag] = useState(null)

    const [messages, setMessages] = useState({
        'tag':''
    })

    const [isIsLoadingNews, setIsLoadingNews] = useState(false)

    async function buscaTag(page = 1) {
        // console.log('chama', page)
        setIsLoadingNews(true)
        setTag([])
       
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/tag-single/'+tid)
            .then((res) => res.json())
            .then((data) => {
                setTag(data.content.dados[0])
                setIsLoadingNews(false)
            }).catch(error => {
                setIsLoadingNews(false)
                setMessages(prevState => ({
                    ...prevState,
                    tag: 'Não foi possivel carregar o título'
                }));
                // throw(error);
            })
    }
    const router = useRouter()
    const {
        isReady
       
    } = router;

    useEffect(() => {
        //Monta Parametro para requisição
        if (!isReady) {
            return;
        }

        buscaTag()
      
    }, [isReady, tid ]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        buscaTag()
    }, []);
   
    return (
        <TitleTagWrapper className='position-relative'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        {
                            (isIsLoadingNews) ?
                                <Loader width="10%" height="100px" margin="0 auto"></Loader>
                                :
                                <div className='p-3 mb-5 d-flex justify-content-start'>
                                    
                                    <div className='box-logo mh-shadow'>
                                        <div className='logo '>

                                            {
                                                    (tag) &&
                                                    <Image
                                                    
                                                        src={Config().LOCAL_HOST_MEUHYPE+tag.image}
                                                        alt={tag.title}
                                                        objectFit="contain"
                                                        layout='fill'
                                                    
                                                        
                                                    />
                                            }
                                        </div>
                                    </div>
                                
                                    <div className='box-conteudo mx-5'>
                                        <h1 className='name mt-5 mb-3'>
                                            {
                                                (tag ) &&
                                                    <>#{tag.title}</>
                                               
                                            }
                                            {/* {
                                                 (messages.channel != "" ) &&
                                                 <Messages message={messages.channel} />
                                            } */}
                                        </h1>
                                        {
                                            (tag) &&
                                                <div dangerouslySetInnerHTML={{__html: tag.description}} />
                                        }
                                    
                                    </div>
                                    
                                </div>
                        }
                    </div>
                </div>
            </div>
        </TitleTagWrapper>
       
    )
}
