import Image from 'next/image'
import React, { useState } from 'react';
import ContentLoader, { Facebook } from 'react-content-loader'
import {formataDataBr} from '../../utils/index'

//Config
import Config from '../../config/index'
import { CardNewsWrapper } from './Style'
import {BtnTag, BtnGo } from './../../styles/globals'
import { corDestaque, fontSize12} from '../../theme';
import Loader from '../Utilities/Loader';

export default function CardNews({item}){
    const [src, setSrc] = useState("");

    const handleImageLoad = (e, id_loader) => {
        // console.log("load", e);
        const element = document.getElementById('load-'+id_loader);
        element.remove(); 
    };
    // const MyLoader = () => <Facebook  />

    return (
        <CardNewsWrapper className='mh-shadow position-relative'>
            <div className=' '>
                <div className='s-image py-2'>
                    <a target='_blank' rel="noreferrer"  href={item.new.news_link} className="">
                        <div className='corpo-image-new position-relative '>
                            <div id={`load-${item.new.news_id}`}><Loader /></div>
                            <Image
                                onLoadingComplete={(e) => {
                                    handleImageLoad(e,item.new.news_id);
                                }}
                                className=" "
                                src={Config().LOCAL_HOST_MEUHYPE+item.new.news_image}
                                alt={item.new.news_title}
                                layout="fill"
                                objectFit="contain"
                            />
                            
                        </div>
                    </a>
                </div>
                
                <h2 className=" title mb-2 lh-sm text-uppercase">{item.new.news_title}</h2>
            
            </div>
           
            <div >
                <div className='tags float-start d-flex flex-wrap'>
                    {
                        item.tags && item.tags.map(function(tag, i){
                            return  <BtnTag key={i} size={fontSize12} className='mh-shadow2 p-2 m-1 rounded-1 '>
                                        #{tag.tag_name}
                                    </BtnTag>
                        })
                    }
                </div>
                <BtnGo className='float-end mx-4 my-2' title="Ir ao conteúdo" rel="noreferrer"  target={'_blank'} href={item.new.news_link}>
                    <div className='position-absolute  mh-shadow2 ' style={{backgroundColor: "#fff", borderRadius:'50px' }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill={corDestaque} className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                    </div>
                </BtnGo>
                <div className='clearfix'></div>
            </div>
            <hr className="divider my-1" />
            <div className='mb-1 s-channel d-flex flex-row'>
                <div className="img-channel p-1">
                    <a target='_blank' rel="noreferrer" href={item.new.news_link} >
                        <div className='corpo-image-channel position-relative'>
                            <Image
                                src={Config().LOCAL_HOST_MEUHYPE+item.new.channel_logo}
                                alt={item.new.channel}
                                layout="fill"
                                objectFit="contain"
                                loading={'eager'}

                            />
                        </div>
                    </a>
                </div>
                <div className='channel px-2'>
                    <h2 className='py-1 '>
                        <a href="" className='text-primary'>
                            { item.new.channel } 
                        </a>
                    </h2>
                    <time className='data d-block'>
                    {formataDataBr(item.new.news_data)}
                    </time>
                </div>
            </div>
           
          
        </CardNewsWrapper>
       
    )
}
