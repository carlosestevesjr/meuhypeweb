import Image from 'next/image'
import React, { useState } from 'react';
import ContentLoader, { Facebook } from 'react-content-loader'
import {formataDataBr, retornaTypeNews} from '../../utils/index'

//Config
import Config from '../../config/index'
import {BtnTag, BtnGo } from './../../styles/globals'
import { corDestaque, fontSize12} from '../../theme';
import Loader from '../Utilities/Loader';
import Link from 'next/link';
import { CardTagWrapper } from './Styles';

export default function CardTag({item}){
   
    const handleImageLoad = (e, id_loader) => {
        // console.log("load", e);
        const element = document.getElementById('load-'+id_loader);
        if(element){
            element.remove(); 
        }
    };

    return (
        <CardTagWrapper className='mh-shadow position-relative'>
            <div className='d-flex'>
                <div className='s-image py-2'>
                    <div className='position-relative '>
                        <a href={'/tags/'+item.tag_slug} >
                            <div id={`load-${item.tag_id}`} className="position-absolute"><Loader  /></div>
                            <div className='box-image position-relative ' >
                                <Image
                                    onLoadingComplete={(e) => {
                                        handleImageLoad(e,item.tag_id);
                                    }}
                                    src={Config().LOCAL_HOST_MEUHYPE+item.tag_image}
                                    width="100%"
                                    height="150px"
                                    layout="responsive"
                                    alt={item.tag_name}
                                    objectFit="contain"
                                    
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div className='box-description'>
                    <h2 className=" title m-2 lh-sm text-uppercase">
                        #{item.tag_name}
                    </h2>
                    <div className='px-2 mx-2 description' dangerouslySetInnerHTML={{__html: item.tag_descriptionshort}} />
                </div>
            </div>
            
            <hr className="divider my-1" />
            <div className='d-flex py-2 justify-content-between box-actions'>
                <div className='d-flex'>
                </div>
                <div className='position-relative '>
                    <BtnGo className='' title="Ir ao conteúdo" >
                        <Link href={'/tags/'+item.tag_slug} >
                            <a className='position-relative' >
                                <div className='position-absolute mh-shadow2 ' style={{backgroundColor: "#fff", borderRadius:'50px' }} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill={corDestaque} className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </a>
                        </Link>
                    </BtnGo>
                    <div className='clearfix'></div>
                </div>
            </div>
            
        </CardTagWrapper>
       
    )
}
