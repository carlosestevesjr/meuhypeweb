
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

export default () => {

    if(process.env.NEXT_PUBLIC_ENV_LOCAL_HOST_MEUHYPE != "" && process.env.NEXT_PUBLIC_ENV_LOCAL_API_MEUHYPE != ""){
        return {
            LOCAL_HOST_MEUHYPE : process.env.NEXT_PUBLIC_ENV_LOCAL_HOST_MEUHYPE,
            LOCAL_API_MEUHYPE: process.env.NEXT_PUBLIC_ENV_LOCAL_API_MEUHYPE,
            LOCAL_HOST_MEUHYPE : process.env.NEXT_PUBLIC_ENV_PRODUCTION_HOST_MEUHYPE,
            LOCAL_API_MEUHYPE: process.env.NEXT_PUBLIC_ENV_PRODUCTION_API_MEUHYPE,
        }
    }else if(process.env.NEXT_PUBLIC_ENV_PRODUCTION_HOST != "" && process.env.NEXT_PUBLIC_ENV_PRODUCTION_API_MEUHYPE != ""){
        return {
            LOCAL_HOST_MEUHYPE : process.env.NEXT_PUBLIC_ENV_PRODUCTION_HOST_MEUHYPE,
            LOCAL_API_MEUHYPE: process.env.NEXT_PUBLIC_ENV_PRODUCTION_API_MEUHYPE,
        }
    }else{
        return {
            LOCAL_HOST_MEUHYPE :"",
            LOCAL_API_MEUHYPE: "",
        }
    }

}
