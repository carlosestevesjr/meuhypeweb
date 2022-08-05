import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

import { bg, light, primary500, primary200, secundary300, fontSize26, fontSize21, fontSize16, fontSize13, fontSize10, fontSize8, primary50, corDestaque, primary100, surface, primary300, secundary50, darkSoft, fontSize32 } from '../theme/index'

export const GlobalStyle = createGlobalStyle`
    /* Your css reset here */
    html {
        /* font-size: 62.5%; */
    }

    body{
        font-size: 1rem;
        background: linear-gradient(to top,${primary50},${primary50}) no-repeat top;
        background-color:${bg};
        background-size: 100% 440px;
        font-family: "Roboto", sans-serif;
        margin: 0;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

        /* Works on Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: ${primary500} ${primary300};
    }
    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 12px;
    }
    *::-webkit-scrollbar-track {
        background: ${primary100};
    }
    *::-webkit-scrollbar-thumb {
        background-color: ${primary300};
        border-radius: 20px;
        border: 3px solid  ${primary100};
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 0;
    }

    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6,
    .display-1, .display-2, .display-3 {
        word-break: break-word;
    }
    
    h1{
        font-size: ${fontSize26}; //26px
    }

    h2{
        font-size:${fontSize21}; // 21px
    }

    h3{
        font-size: ${fontSize16}; // 16px
    }

    h4{
        font-size: ${fontSize13}; // 13px
    }

    h5{
        font-size: ${fontSize10}; // 10px
    }

    h6{
        font-size: ${fontSize8}; // 8px
    }

    a {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
        color: ${primary500};  
        &:hover{
            color: ${primary200}
        }
    }

    p{
        color: ${primary500};  
    }

    * {
        box-sizing: border-box;
    }

    .bg-message{
        background-color: ${surface};
    }

    //Padrões
    .layout{
        padding-top: 70px;
    }

    .site-branding{
        width: 150px;
        height: 21px;
    }

    //Animation
    .animation {
        position: relative;
        animation: animation 2s ease-out;
    }
    @keyframes animation {
        0% {
            opacity: 0;
            left: -10px;
        }
        100% {
            opacity: 1;
            left: 0;
        }
    }

    .slide-in {
        text-align: center;
        color: #fff;
    }

    /* Colors */
    .primary, .btn-primary, .text-primary{
        color:${primary500}
    }
    .secundary, .btn-secundary, .text-secundary{
        color:${secundary300}
    }
    
    //Base
    .mh-shadow {
        /* Meu Hype - Shadow */
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        /* box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px; */
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset; */
    }

    .mh-shadow2{
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
    }

`;


export const TitleChannelWrapper = styled.div`
    .logo {
        background-color: ${light};
        border-radius: 3px;
    }
    .name{
        font-size: ${fontSize32};
        color: ${corDestaque};
        font-weight: bold;
    }
    .description{
        font-size: ${fontSize26};
        color: ${primary500};
        line-height: 17px;
    }
`;


export const HeaderWrapper = styled.header`
    /* padding: 10px; */
    z-index: 999999999 ;
    width: 100%;
    background-color: ${primary500};
    min-height: 70px;
    color: ${light};

    #search{
        .search-input{
            font-size: ${fontSize13};
            color: ${primary500};
            width: 100%;
           
            background-color: ${bg} ;
            
            padding-right: 26px;
            &:focus{
                box-shadow: none;
            }
        }
        button{
            top: 8px;
            right: 8%;
            padding: 3px;
            border: none;
            &:hover{
                background: none;
            }
            &:active{
                border: none;
                background: none;
            }
            &:focus{
                box-shadow: none;
                border: none;
                background: none;
            }
        }
    }
`;


export const PageTitleWrapper = styled.div`
   
    .title-page-initial{
        /* margin-bottom:10px ; */
        font-size: ${fontSize26};
        padding:1.25em;
        color: ${corDestaque};
    }  
    .title-page{
        margin-bottom:10px;
        font-size: ${fontSize26};
        padding:1.25em;
        color: ${primary500};
    }  
    .title-page-geral{
        font-size: ${fontSize26};
        color: ${corDestaque};
    }  
`;

export const SidebarWrapper = styled.div`
    width: 100%;
    height: 100%;
    background:${light};
    padding: 15px;
    border-radius: 3px;
`;

export const FooterWrapper = styled.footer`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background-color: ${light};
    color: ${light};
    h3{
        color: ${corDestaque};
        font-size: ${fontSize26};
        font-weight: bold;
        margin-bottom: 5px;
    }
    .link{
        color: ${primary500};
    }
    .divider{
        color: ${primary200};
    }
    .copy{
        line-height: 18px;
        font-size:${fontSize16};
        span{
            font-size: ${fontSize13};
        }
    }
    .nav {
        font-weight:bold;
        .link:hover{
            text-decoration: underline;
        }
    }
`;

export const PaginateWrapper = styled.div`
    button{
        border:none ;
        background:none;
    }
    svg{
        margin-top:-8px;
    }
    .page-link{
        color: ${primary500};
        cursor: pointer;
        &:active{
            background-color: ${primary500};
        }
        &.active{
            color: ${light};
            background-color: ${primary500};
            border: 1px solid  ${primary50};
        }
    }
`;

export const BtnTag = styled.div`
    /* background-color: ${secundary50}; */
    border-bottom: 2px solid ${primary500};
    color: ${primary500};
    font-weight:bold ;
    font-size: ${props => props.size || fontSize16};
`;

export const BtnGo = styled.div`
    width: 35px;
    color: ${light};
    transition: transform 250ms;
    top: 7px;
    cursor: pointer;
    
    a{
        z-index: 99;
    }

    &:before {
        content: '';
        position: absolute;
        top:0;
        left:-10px;
        width:22px;
        height: 22px;
        background: ${primary200};
        border-radius: 50px;
        z-index: 9;
    }

    &:hover {
        transform: translatex(5px);
    }

`;

export const NewsWrapper = styled.div`
    /* margin-top: -78px; */
    
`;

export const TagsRecentsWrapper = styled.div`
    padding: 10px;
    padding-bottom: 60px;
    .subtitle-page{
        margin-bottom:10px;
        font-size: ${fontSize26};
        padding:1.25em;
        color: ${primary500};
    }  
    #list-tags{
        width: 75%;
    }  
   
`;


