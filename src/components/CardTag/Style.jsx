import styled from 'styled-components';
import {
    fontSize12,
    light,
    primary500Transparent
    
} from '../../theme/index'

export const CardTagWrapper = styled.article`
    min-width: 97px;
    min-height: 129px;
    background:${light};
    border-radius: 3px;
    cursor: pointer;
    position: relative;

    img{
       
    }
    h4{
        font-size: ${fontSize12};
        line-height: 1.2em;
        width: 100%;
        z-index:999 ;
        position: absolute;
        bottom: 0;
        color:${light};
        display: block;
        padding: 0.5em;
        background: ${primary500Transparent};
        border-radius: 3px;
    }
`;
