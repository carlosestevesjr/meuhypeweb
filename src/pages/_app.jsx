
import './../styles/bootstrap.css'
import { ThemeProvider } from 'styled-components'
import  { theme }  from './../theme/index'

function MyApp({ Component, pageProps }) {
     
    return  <ThemeProvider theme={ theme }>
                <Component {...pageProps} />
            </ThemeProvider >
    
}

export default MyApp
