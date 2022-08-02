/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        domains: ["192.168.15.7","159.89.50.50",'www.nocinema.kinghost.net','localhost'],
        formats: ["image/webp"],
    },
    // publicRuntimeConfig: {
    //     local_host_meuhype : process.env.NEXT_PUBLIC_ENV_PRODUCTION_HOST_MEUHYPE,
    //     local_api_meuhype: process.env.NEXT_PUBLIC_ENV_PRODUCTION_API_MEUHYPE,
    // },
    env: {
        local_host_meuhype: process.env.NEXT_PUBLIC_ENV_LOCAL_HOST,
        local_api_meuhype: process.env.NEXT_PUBLIC_ENV_LOCAL_API_MEUHYPE,
    },
    async rewrites() {
        return [
          {
            source: '/api/:slug*',
            destination: 'http://localhost:3000'
          },
        ]
    }
    
}

// let LOCAL_HOST_NOCINEMA = ""
// let LOCAL_API_NOCINEMA = ""

// if (__DEV__) {
//     LOCAL_HOST_NOCINEMA = 'http://192.168.1.7/meuhype/public/'
//     LOCAL_API_NOCINEMA = 'http://192.168.1.7/meuhype/public/api/'
// }else{
//     LOCAL_HOST_NOCINEMA = 'http://www.nocinema.kinghost.net/'
//     LOCAL_API_NOCINEMA = 'http://www.nocinema.kinghost.net/api/'
// }

// export default {
//     LOCAL_HOST_NOCINEMA : LOCAL_HOST_NOCINEMA,
//     LOCAL_API_NOCINEMA : LOCAL_API_NOCINEMA,
//     API_POKEMON:'https://pokeapi.co/api/v2/'
// }

module.exports = nextConfig
