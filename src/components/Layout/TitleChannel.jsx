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

export default function TitleChannel({cid}){

    const [channel, setChannel] = useState(null)

    const [messages, setMessages] = useState({
        'channel':''
    })

    const [isIsLoadingNews, setIsLoadingNews] = useState(false)

    const buscaPage = () => {
        // console.log('buscaPage',page)
        buscaChannel()
    }

    async function buscaChannel() {
        // console.log('chama', page)
        setIsLoadingNews(true)
        setChannel([])
       
        await fetch(Config().LOCAL_API_MEUHYPE + 'v1/channel-single/'+cid)
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

        buscaPage()// eslint-disable-line react-hooks/exhaustive-deps
      
    }, [isReady, cid ]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        buscaPage()// eslint-disable-line react-hooks/exhaustive-deps
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
                                    
                                    <div className='logo mx-3 p-2  mh-shadow'>
                                    {
                                            (channel) &&
                                            <Image
                                                src={Config().LOCAL_HOST_MEUHYPE+channel.image}
                                                alt={channel.neme}
                                                width={'220'}
                                                height={'132'}
                                                objectFit="contain"
                                                
                                            />
                                    }
                                    </div>
                                
                                    <div className='mx-5'>
                                        <h1 className='name my-3'>
                                            {
                                                (channel ) &&
                                                    <>{channel.name}</>
                                               
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
