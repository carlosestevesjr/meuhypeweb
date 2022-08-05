import styled from 'styled-components';
import {
    darkSoft,
    fontSize14,
    fontSize16,
    fontSize20,
    fontSize24,
    fontSize32,
    light,
    primary50,
    primary500,
    secundary50,
    
} from '../../theme/index'

export const CardChannelsWrapper = styled.article`
    background:${light};
    padding: 15px;
    padding-bottom: 5px;
    border-radius: 3px;
    min-height: 272px;

    .load{
        margin:0 auto ;
    }

    .box-actions{
        min-height: 45px;
    }

    .box-image{
        background-color: #f3f3f3;
        border-radius: 3px;
        border: 1px solid ${primary50};
        width:100%;
        height: 132px;
        padding:15px ;
    }

    .description p{
        color: ${darkSoft};
        line-height: ${fontSize20};
        font-style:italic ;
    }

    .title{
        font-family: 'Noto Sans Display';
        /* border-radius: 3px; */
        padding:0.5em;
        color: ${primary500};
        font-weight: bold;
        font-size: ${fontSize16};
       
    }
`;