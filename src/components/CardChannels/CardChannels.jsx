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
import { CardChannelsWrapper } from './Styles';

export default function CardChannels({item}){
   
    const handleImageLoad = (e, id_loader) => {
        // console.log("load", e);
        const element = document.getElementById('load-'+id_loader);
        if(element){
            element.remove(); 
        }
    };

    return (
        <CardChannelsWrapper className='mh-shadow position-relative'>
            <div className=' '>
                <div className='s-image py-2'>
                    <div className='corpo-image-new position-relative '>
                        <a href={'/canais/'+item.channel_slug} >
                            <div id={`load-${item.channels_id}`} className="position-absolute"><Loader margin={'0 0 0 75% '} /></div>
                            <div className='box-image position-relative '>
                                <Image
                                    onLoadingComplete={(e) => {
                                        handleImageLoad(e,item.channels_id);
                                    }}
                                    src={Config().LOCAL_HOST_MEUHYPE+item.channel_logo}
                                    alt={item.channels}
                                    objectFit="contain"
                                    layout='fill'
                                />
                            </div>
                            
                        </a>
                        <div className='position-absolute top-0 start-0 translate-middle mx-2'>
                            {
                                retornaTypeNews(item.channel_type)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=" title lh-sm text-uppercase">
                {item.channel}
            </h2>
            <div className='p-2 description' dangerouslySetInnerHTML={{__html: item.channel_description}} />
            <hr className="divider my-1" />
            <div className='d-flex py-2 justify-content-between box-actions'>
                <div className='d-flex'>
                    {
                        (item.channel_facebook) &&
                        <Link href={item.channel_facebook} passHref   >
                            <a target="_blank" rel="noopener noreferrer" className='m-1' >
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 9.55304C0 14.2761 3.43029 18.2036 7.91667 19V12.1386H5.54167V9.5H7.91667V7.38863C7.91667 5.01363 9.44696 3.69471 11.6114 3.69471C12.297 3.69471 13.0364 3.8 13.722 3.90529V6.33333H12.5083C11.347 6.33333 11.0833 6.91363 11.0833 7.65304V9.5H13.6167L13.1947 12.1386H11.0833V19C15.5697 18.2036 19 14.2769 19 9.55304C19 4.29875 14.725 0 9.5 0C4.275 0 0 4.29875 0 9.55304Z" fill="#27318D"/>
                                </svg>
                            </a>
                        </Link>
                    }
                    {
                        (item.channel_instagram) &&
                        <Link href={item.channel_instagram} passHref >
                            <a target="_blank" rel="noopener noreferrer" className='m-1'>
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.50011 6.87578C7.7798 6.87578 6.37589 8.27969 6.37589 10C6.37589 11.7203 7.7798 13.1242 9.50011 13.1242C11.2204 13.1242 12.6243 11.7203 12.6243 10C12.6243 8.27969 11.2204 6.87578 9.50011 6.87578ZM18.8704 10C18.8704 8.70625 18.8821 7.42422 18.8095 6.13281C18.7368 4.63281 18.3946 3.30156 17.2978 2.20469C16.1986 1.10547 14.8696 0.765623 13.3696 0.692967C12.0759 0.620311 10.7939 0.63203 9.50245 0.63203C8.2087 0.63203 6.92667 0.620311 5.63527 0.692967C4.13527 0.765623 2.80402 1.10781 1.70714 2.20469C0.607924 3.3039 0.26808 4.63281 0.195424 6.13281C0.122767 7.42656 0.134486 8.70859 0.134486 10C0.134486 11.2914 0.122767 12.5758 0.195424 13.8672C0.26808 15.3672 0.610268 16.6984 1.70714 17.7953C2.80636 18.8945 4.13527 19.2344 5.63527 19.307C6.92902 19.3797 8.21105 19.368 9.50245 19.368C10.7962 19.368 12.0782 19.3797 13.3696 19.307C14.8696 19.2344 16.2009 18.8922 17.2978 17.7953C18.397 16.6961 18.7368 15.3672 18.8095 13.8672C18.8845 12.5758 18.8704 11.2937 18.8704 10V10ZM9.50011 14.807C6.83996 14.807 4.69308 12.6602 4.69308 10C4.69308 7.33984 6.83996 5.19297 9.50011 5.19297C12.1603 5.19297 14.3071 7.33984 14.3071 10C14.3071 12.6602 12.1603 14.807 9.50011 14.807ZM14.504 6.11875C13.8829 6.11875 13.3814 5.61719 13.3814 4.99609C13.3814 4.375 13.8829 3.87344 14.504 3.87344C15.1251 3.87344 15.6267 4.375 15.6267 4.99609C15.6269 5.14357 15.5979 5.28964 15.5416 5.42593C15.4852 5.56222 15.4026 5.68606 15.2983 5.79034C15.194 5.89463 15.0702 5.97732 14.9339 6.03367C14.7976 6.09002 14.6515 6.11893 14.504 6.11875V6.11875Z" fill="#C065D8"/>
                                </svg>
                            </a>
                        </Link>
                    }
                    {
                        (item.channel_youtube) &&
                        <Link href={item.channel_youtube} passHref >
                            <a target="_blank" rel="noopener noreferrer" className='m-1'>
                                <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.8394 4.19522C24.8394 1.96872 23.223 0.177625 21.2256 0.177625C18.5202 0.0494776 15.7611 0 12.9414 0H12.0624C9.24951 0 6.48549 0.0494778 3.78007 0.17812C1.78763 0.17812 0.171217 1.97911 0.171217 4.20561C0.0491312 5.96653 -0.00263309 7.72794 0.000296965 9.48935C-0.00458646 11.2508 0.0507591 13.0138 0.166334 14.7785C0.166334 17.005 1.78275 18.811 3.77519 18.811C6.61734 18.9446 9.53275 19.0039 12.497 18.999C15.4661 19.0089 18.3734 18.9462 21.2188 18.811C23.2161 18.811 24.8325 17.005 24.8325 14.7785C24.9497 13.0122 25.0034 11.2508 24.9986 9.4844C25.0096 7.72299 24.9566 5.95993 24.8394 4.19522ZM10.109 14.3431V4.62073L17.19 9.47946L10.109 14.3431Z" fill="#E00028"/>
                                </svg>

                            </a>
                        </Link>
                    }
                    {
                        (item.channel_twitter) &&
                        <Link href={item.channel_twitter} passHref >
                            <a target="_blank" rel="noopener noreferrer" className='m-1'>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 0.4375C4.94316 0.4375 0.4375 4.94316 0.4375 10.5C0.4375 16.0568 4.94316 20.5625 10.5 20.5625C16.0568 20.5625 20.5625 16.0568 20.5625 10.5C20.5625 4.94316 16.0568 0.4375 10.5 0.4375ZM15.3358 8.02256C15.3426 8.12813 15.3426 8.23818 15.3426 8.346C15.3426 11.6433 12.8314 15.4414 8.24268 15.4414C6.82764 15.4414 5.51592 15.0304 4.41084 14.3229C4.61299 14.3453 4.80615 14.3543 5.01279 14.3543C6.18076 14.3543 7.25439 13.959 8.11016 13.2896C7.01406 13.2672 6.09316 12.5484 5.77871 11.5602C6.16279 11.6163 6.50869 11.6163 6.904 11.5152C6.33962 11.4006 5.83234 11.0941 5.46834 10.6478C5.10434 10.2015 4.90607 9.64291 4.90723 9.06699V9.03555C5.2374 9.22197 5.62598 9.33652 6.03252 9.35225C5.69076 9.12448 5.41048 8.8159 5.21654 8.45388C5.0226 8.09185 4.92098 7.68756 4.9207 7.27686C4.9207 6.81191 5.04199 6.3874 5.25986 6.01904C5.8863 6.79021 6.66801 7.42092 7.55417 7.8702C8.44033 8.31947 9.41111 8.57724 10.4034 8.62676C10.0508 6.93096 11.3176 5.55859 12.8404 5.55859C13.5592 5.55859 14.2061 5.85957 14.662 6.34473C15.2258 6.23916 15.7648 6.02803 16.2455 5.74502C16.0591 6.32227 15.6683 6.80967 15.1494 7.11738C15.6525 7.06348 16.1377 6.92422 16.5869 6.72881C16.2478 7.22744 15.8232 7.66992 15.3358 8.02256V8.02256Z" fill="#1DA1F2"/>
                                </svg>
                            </a>
                        </Link>
                    }

                </div>
                <div className='position-relative '>
                    <BtnGo className='' title="Ir ao conteúdo" >
                        <Link href={'/canais/'+item.channel_slug} >
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
            
        </CardChannelsWrapper>
       
    )
}
