import styled from 'styled-components';
import {
    light,
    bg,
    primary500,
    fontSize13,
    primary50,
    fontSize12,
    primary200,
    surface,
    fontSize10,
    primary800,
    secundary700,
    secundary900,
    secundary100,
    secundary50,
    secundary200,
    corDestaque,
    dark,
    primary900,
    darkSoft,
    fontSize16,
    fontSize14
} from '../../theme/index'

export const CardNewsWrapper = styled.article`
    /* max-height: 292px; */
    background:${light};
    padding: 15px;
    padding-bottom: 5px;
    border-radius: 3px;
    /* border-bottom: 3px solid ${primary500}; */
    /* min-height: 342px ; */
    
    .divider{
        color: ${primary200};
    }

    .s-channel{
        .img-channel{
            width: 25%;
            .corpo-image-channel{
                width: 100%;
                height:35px ;
            }
        }
        img{
            max-width: 100%;
            max-height: 35px;
        }
       
    }

    .corpo-image-channel{
        width: 100%;
        height:137px ;
    }

    .channel {
        font-family: 'Noto Sans Display';
        width: 75%;
        h2{
            font-size: ${fontSize13};
        }
    }

    .data{
        font-size: ${fontSize13};
        color:${primary500} ;
    }

    .s-image{
         background: ${secundary50};
        border: 1px solid #d3d3d3;
        border-bottom: none;
        
        .corpo-image-new{
            width: 100%;
            height:137px ;
        }
        .image{
            display:block;
            margin:0 auto ;
            max-height: 132px;
        }
    }

    .tags {
        width:78%;
        /* background:#d3d3d3 ; */
        button{
            text-align: left;
            font-weight: bold;
            font-size: ${fontSize16};
            color: ${primary500};  
            border: none;
            background: none;
            &:hover{
                color: ${primary200};
            }
        }
    }

    .title{
        font-family: 'Noto Sans Display';
        /* border-radius: 3px; */
        padding:0.5em;
        border: 1px solid #d3d3d3;
        background: ${secundary50};
        color: ${darkSoft};
        font-size: ${fontSize13};
        font-style:italic ;
    }
`;
