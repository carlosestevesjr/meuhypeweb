import Link from 'next/link'
import  Router, { useRouter } from 'next/router'
import { PaginateWrapper } from '../../styles/globals';
import { primary500 } from '../../theme';

export default function Paginate2({ dados, pageCurrent}) {
    const router = useRouter(); 

    function active(id , pageActive){
        if(id == (pageActive -1)){
            return 'page-link active'
        }else{
            return 'page-link'
        }
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
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query, pid: 1},
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
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query,  pid: pageCurrent - 1 },
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
                        (pageCurrent < dados.last_page ) && 
                        <li className="page-item">
                            <button 
                                onClick={() => (
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query,  pid: pageCurrent + 1},
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
                    (pageCurrent < dados.last_page && dados.last_page > 1) && 
                        <li className="page-item">
                            <button
                                onClick={() => (
                                    Router.push({
                                        pathname: router.pathname,
                                        query: {...router.query, pid: dados.last_page },
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