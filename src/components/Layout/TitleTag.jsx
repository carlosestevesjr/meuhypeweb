import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import ContentLoader, { Facebook } from 'react-content-loader'
import {formataDataBr, retornaTypeNews} from '../../utils/index'
import Router, { useRouter } from 'next/router'

//Config
import Config from '../../config/index'
import {BtnTag, BtnGo, TitleChannelWrapper } from './../../styles/globals'
import { corDestaque, fontSize12} from '../../theme';
import Loader from '../Utilities/Loader';
import Link from 'next/link';
import Messages from './Messages';

export default function TitleTag({tid}){

    const [channel, setChannel] = useState(null)

    const [messages, setMessages] = useState({
        'channel':''
    })

    const [isIsLoadingNews, setIsLoadingNews] = useState(false)

    async function buscaChannel(page = 1) {
        // console.log('chama', page)
        setIsLoadingNews(true)
        setChannel([])
       
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/tag-single/'+tid)
            .then((res) => res.json())
            .then((data) => {
                setChannel(data.content.dados[0])
                setIsLoadingNews(false)
            }).catch(error => {
                setIsLoadingNews(false)
                setMessages(prevState => ({
                    ...prevState,
                    channel: 'Não foi possivel carregar o título'
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

        buscaChannel()
      
    }, [isReady, tid ]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        buscaChannel()
    }, []);
   
    return (
        <TitleChannelWrapper className='position-relative'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        {
                            (isIsLoadingNews) ?
                                <Loader width="10%" height="100px" margin="0 auto"></Loader>
                                :
                                <div className='p-3 mb-5 d-flex justify-content-start'>
                                    
                                    <div className='logo px-2  mh-shadow'>
                                    {
                                            (channel) &&
                                            <Image
                                                src={Config().LOCAL_HOST_MEUHYPE+channel.image}
                                                alt={channel.neme}
                                                width={'155'}
                                                height={'244'}
                                                objectFit="contain"
                                                
                                            />
                                    }
                                    </div>
                                
                                    <div className='mx-5'>
                                        <h1 className='name mt-5 mb-3'>
                                            {
                                                (channel ) &&
                                                    <>#{channel.title}</>
                                               
                                            }
                                            {/* {
                                                 (messages.channel != "" ) &&
                                                 <Messages message={messages.channel} />
                                            } */}
                                        </h1>
                                        {
                                            (channel) &&
                                                <div dangerouslySetInnerHTML={{__html: channel.description}} />
                                        }
                                    
                                    </div>
                                    
                                </div>
                        }
                    </div>
                </div>
            </div>
        </TitleChannelWrapper>
       
    )
}
