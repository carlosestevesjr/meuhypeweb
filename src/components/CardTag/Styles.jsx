import styled from 'styled-components';
import {
    darkSoft,
    fontSize12,
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

export const CardTagWrapper = styled.article`
    background:${light};
    padding: 15px;
    padding-bottom: 5px;
    border-radius: 3px;

    .s-image{
        position: relative;
        width: 35%;

        .load{
            margin:0 auto ;
        }

        .box-image{
            position: relative;
            background-color: #f3f3f3;
            border-radius: 3px;
            border: 1px solid ${primary50};
           
        }
    }

    .box-description{
        width: 75%;

        .description{
            font-size: ${fontSize14};
       
        }
    }

    .title{
        font-family: 'Noto Sans Display';
        /* border-radius: 3px; */
        padding:0.5em;
        color: ${primary500};
        font-weight: bold;
        font-size: ${fontSize16};
       
    }
  

    .box-actions{
        min-height: 45px;
    }

   

    .description p{
        color: ${darkSoft};
        line-height: ${fontSize16};
        font-style:italic ;
    }

   
`;
