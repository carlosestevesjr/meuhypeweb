import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { PaginateWrapper } from '../../styles/globals';
import { primary500 } from '../../theme';

export default function Paginate({ dados, pageCurrent, search, buscaPage}) {
    const router = useRouter(); 

    function active(id , pageActive){
        if(id == (pageActive -1)){
            return 'page-link active'
        }else{
            return 'page-link'
        }
    }

    const Pagination = () => {

        let page = [];

        for (var i = 0; i < dados.last_page; i++) {

            if (dados.last_page > 10) {
                if(i < 5) {
                    page.push(
                        <li key={i} className="page-item">
                            
                                <div onClick={() => buscaPage(i+1)} className={active(i,pageCurrent)} >{i + 1}</div>
                          
                        </li>
                    );
                }

                if((dados.last_page - 5) > i) {

                }else {
                    page.push(<li  key={i} className="page-item">
                       
                            <div onClick={() => buscaPage(i+1)} className={active(i,pageCurrent)} >{i + 1}</div>
                       
                    </li>
                    );
                }

                if(i > 5 && i < 7) {
                    page.push(
                            <li  key={i}  className="page-item">
                                <span className={active(i,pageCurrent)} >...</span>
                            </li>
                        );
                }
            }else{
                page.push(
                    <li  key={i} className="page-item">
                       
                        <div onClick={() => buscaPage(i+1)} className={active(i,pageCurrent)} >{i + 1}</div>
                        
                    </li>
                );
            }
            
        }

        return page
    }

    return (
        <PaginateWrapper className='my-2'>
            <nav>
                <ul className="pagination justify-content-center d-flex flex-wrap">
                    {
                        (pageCurrent > 1 ) && 
                        <li className="page-item">
                            <button 
                            onClick={() => (
                                    buscaPage(1),
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query, pagina: 1, s: search },
                                    })
                                )} 
                            >
                                <div className="page-link mh-shadow" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={primary500} className="bi bi-arrow-right-circle" viewBox="0 0 18 18">
                                        <path fillRule="evenodd" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={primary500} className="bi bi-arrow-right-circle" viewBox="0 0 18 18">
                                        <path fillRule="evenodd" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                                    </svg>
                                    &nbsp;Primeira
                                </div>
                            </button>
                        </li>
                    }
                    {
                        (pageCurrent > 1) && 
                        <li className="page-item">
                            <button 
                                onClick={() => (
                                    buscaPage(pageCurrent - 1),
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query, pagina: pageCurrent - 1, s: search },
                                    })
                                )} 
                            >
                                <div className="page-link mh-shadow" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={primary500} className="bi bi-arrow-right-circle" viewBox="0 0 18 18">
                                        <path fillRule="evenodd" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                                    </svg>
                                    &nbsp;Anterior
                                </div>
                            </button>
                        </li>
                    }
                    {/* <Pagination ></Pagination> */}
                    {
                        (pageCurrent <= dados.last_page && dados.last_page != 1) && 
                        <li className="page-item">
                            <button 
                                onClick={() => (
                                    buscaPage(pageCurrent + 1),
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query, pagina: pageCurrent + 1, s: search },
                                    })
                                )}
                            >
                                <div className="page-link mh-shadow" >
                                    Próximo
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={primary500} className="bi bi-arrow-right-circle" viewBox="0 0 18 18">
                                        <path fillRule="evenodd" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
                                </div>
                            </button>
                        </li>
                    }

                    {
                    (pageCurrent <= dados.last_page && dados.last_page != 1) && 
                        <li className="page-item">
                            <button
                                onClick={() => (
                                    buscaPage(dados.last_page),
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query, pagina: dados.last_page, s: search },
                                    })
                                    
                                )}
                            >
                                <div className="page-link mh-shadow" >
                                    Última
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={primary500} className="bi bi-arrow-right-circle" viewBox="0 0 18 18">
                                        <path fillRule="evenodd" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={primary500} className="bi bi-arrow-right-circle" viewBox="0 0 18 18">
                                        <path fillRule="evenodd" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
                                </div>
                            </button>
                        </li>
                    }
                </ul>
            </nav>
        </PaginateWrapper>
    )
}