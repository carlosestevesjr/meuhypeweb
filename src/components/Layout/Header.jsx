import { HeaderWrapper } from './../../styles/globals'
import Router, { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';


import logo from '../../assets/images/commons/meu_hype.png';
import { light } from '../../theme';

export default function Header() {

    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        Router.push(`/?pagina=1&s=`+search)
        // alert(`The name you entered was: ${search}`)
    }

    const router = useRouter();
    const {
        isReady,
        query: {
            s
        }
    } = router;

    useEffect(() => {
        //Monta Parametro para requisição
        if (!isReady) {
            //console.log('Router not ready')
            return;
        }
        setSearch(s)
        //console.log(`pagina: ${pagina}`)

    }, [isReady,s]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <HeaderWrapper className='header mh-shadow position-fixed zindex-master mb-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <nav className="navbar navbar-dark navbar-expand-lg ">
                            <div className="container ">
                                <div className="site-branding">
                                    <div itemProp="logo">
                                        <Link href="/">
                                            <a >
                                                <Image
                                                    src={logo}
                                                    alt="Meu Hype"
                                                    width="150px"
                                                    height="21px"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link active" aria-current="page" href="#">Canais</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link" aria-current="page" href="#">Tags</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link" aria-current="page" href="#">Sobre</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link" aria-current="page" href="#">Doação</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link" aria-current="page" href="#">Contato</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <form id="search" className="d-flex position-relative" role="search" onSubmit={handleSubmit}>
                                    <input 
                                        className="search-input form-control my-2 me-2" 
                                        type="search" 
                                        placeholder="Buscar Notícias" 
                                        aria-label="Search"
                                        defaultValue={s}
                                        onChange={(e) => setSearch(e.target.value)} 
                                    />
                                    <button onClick={(e) => handleSubmit(e)} className="position-absolute btn btn-outline-success" type="submit">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill={light} xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_7_37)">
                                            <path d="M3.45938 8.40299C2.67264 7.32943 2.32027 5.99839 2.47276 4.67618C2.62525 3.35396 3.27136 2.13808 4.28183 1.27179C5.29229 0.405493 6.59259 -0.0473274 7.92258 0.00391957C9.25257 0.0551665 10.5142 0.606701 11.455 1.54818C12.3958 2.48966 12.9464 3.75166 12.9967 5.08168C13.047 6.41171 12.5933 7.71169 11.7262 8.72153C10.8592 9.73137 9.64288 10.3766 8.32056 10.5282C6.99823 10.6797 5.66745 10.3264 4.59445 9.53887H4.59526C4.57088 9.57137 4.54488 9.60224 4.51563 9.63231L1.38751 12.7604C1.23516 12.9129 1.02848 12.9986 0.812953 12.9987C0.597421 12.9987 0.390686 12.9132 0.238228 12.7608C0.0857697 12.6085 7.62939e-05 12.4018 0 12.1863C-7.62939e-05 11.9707 0.0854712 11.764 0.237822 11.6116L3.36595 8.48343C3.39499 8.45403 3.42623 8.42687 3.45938 8.40218V8.40299ZM3.24976 5.27974C3.24976 5.86659 3.36535 6.44769 3.58992 6.98986C3.8145 7.53203 4.14366 8.02467 4.55863 8.43963C4.97359 8.85459 5.46622 9.18376 6.00839 9.40833C6.55057 9.63291 7.13166 9.74849 7.71851 9.74849C8.30535 9.74849 8.88645 9.63291 9.42863 9.40833C9.9708 9.18376 10.4634 8.85459 10.8784 8.43963C11.2934 8.02467 11.6225 7.53203 11.8471 6.98986C12.0717 6.44769 12.1873 5.86659 12.1873 5.27974C12.1873 4.09456 11.7164 2.95791 10.8784 2.11986C10.0403 1.28181 8.9037 0.810995 7.71851 0.810995C6.53332 0.810995 5.39668 1.28181 4.55863 2.11986C3.72057 2.95791 3.24976 4.09456 3.24976 5.27974Z" fill="#3C0E4B"/>
                                            </g>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}