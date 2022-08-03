import Image from 'next/image'
import React from 'react';
import {formataDataBr} from '../../utils/index'

//Config
import Config from '../../config/index'
import { CardTagWrapper } from './Style'
import Link from 'next/link'
import {BtnTag, BtnGo } from './../../styles/globals'
import { corDestaque, fontSize12 } from '../../theme';

export default function CardTag({item}){
    const myLoader = ({ src, width, quality }) => {
        // return `${Config().LOCAL_HOST_MEUHYPE+item.tag_image}`
        return `${Config().LOCAL_HOST_MEUHYPE+item.tag_image}?w=${width}&q=${quality || 75}`
    }
    return (
        <CardTagWrapper className='mh-shadow m-2'>
            <Link href={`/tags/${item.tag_slug}`} >
                <a>
                    <Image
                        loader={myLoader}
                        src={'image-src'}
                        alt={item.tag_name}
                        width={97}
                        height={129}
                    />
            
                    <h4>{item.tag_name}</h4>
                </a>
            </Link>
        </CardTagWrapper>
       
    )
}
