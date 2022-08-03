import { stubFalse } from "lodash";
import { darkSoft, secundary100 } from "../theme";

export const messageDefault = "Não foi possivel acessar os dados, tente novamente mais tarde."

export function dataHjAno() {
    var data = new Date();
    return data.getFullYear();

}

export function retornaTypeNews(type) {
    if (type === "site") {
        return (
            <svg width="32" height="32" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14.5" cy="14.5" r="14.5" fill={secundary100} />
                <path d="M19.5 9.875H9.5C8.8125 9.875 8.25 10.4375 8.25 11.125V18C8.25 18.6875 8.8125 19.25 9.5 19.25H11.375L10.75 19.875V21.125H18.25V19.875L17.625 19.25H19.5C20.1875 19.25 20.75 18.6875 20.75 18V11.125C20.75 10.4375 20.1875 9.875 19.5 9.875ZM19.5 18H9.5V11.125H19.5V18Z" fill={darkSoft} />
            </svg>
        )
    } else if (type === "youtube") {
        return (
            <svg width="32" height="32" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14.5" cy="14.5" r="14.5" fill={secundary100} />
                <path d="M15.051 8.999H15.14C15.962 9.002 20.127 9.032 21.25 9.334C21.5895 9.42617 21.8989 9.60582 22.1472 9.85501C22.3955 10.1042 22.574 10.4142 22.665 10.754C22.766 11.134 22.837 11.637 22.885 12.156L22.895 12.26L22.917 12.52L22.925 12.624C22.99 13.538 22.998 14.394 22.999 14.581V14.656C22.998 14.85 22.989 15.764 22.917 16.716L22.909 16.821L22.9 16.925C22.85 17.497 22.776 18.065 22.665 18.483C22.5743 18.823 22.3958 19.1331 22.1475 19.3823C21.8991 19.6315 21.5896 19.8111 21.25 19.903C20.09 20.215 15.681 20.237 15.07 20.238H14.928C14.619 20.238 13.341 20.232 12.001 20.186L11.831 20.18L11.744 20.176L11.573 20.169L11.402 20.162C10.292 20.113 9.235 20.034 8.748 19.902C8.40849 19.8102 8.09907 19.6308 7.85072 19.3817C7.60238 19.1327 7.42385 18.8228 7.333 18.483C7.222 18.066 7.148 17.497 7.098 16.925L7.09 16.82L7.082 16.716C7.03265 16.0384 7.0053 15.3594 7 14.68L7 14.557C7.002 14.342 7.01 13.599 7.064 12.779L7.071 12.676L7.074 12.624L7.082 12.52L7.104 12.26L7.114 12.156C7.162 11.637 7.233 11.133 7.334 10.754C7.42469 10.414 7.60316 10.1039 7.85151 9.85468C8.09986 9.60545 8.40937 9.42589 8.749 9.334C9.236 9.204 10.293 9.124 11.403 9.074L11.573 9.067L11.745 9.061L11.831 9.058L12.002 9.051C12.9537 9.02038 13.9058 9.00337 14.858 9H15.051V8.999ZM13.4 12.209V17.027L17.557 14.619L13.4 12.209Z" fill={darkSoft} />
            </svg>
        )
    } else if (type === "podcast") {
        return (
            <svg width="32" height="32" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14.5" cy="14.5" r="14.5" fill={secundary100} />
                <path d="M14.5 16.1406C15.8755 16.1406 16.9902 15.0391 16.9902 13.6797V10.3984C16.9902 9.03906 15.8755 7.9375 14.5 7.9375C13.1245 7.9375 12.0098 9.03906 12.0098 10.3984V13.6797C12.0098 15.0391 13.1245 16.1406 14.5 16.1406ZM19.334 13.6504C19.334 13.5859 19.2813 13.5332 19.2168 13.5332H18.3379C18.2734 13.5332 18.2207 13.5859 18.2207 13.6504C18.2207 15.7056 16.5552 17.3711 14.5 17.3711C12.4448 17.3711 10.7793 15.7056 10.7793 13.6504C10.7793 13.5859 10.7266 13.5332 10.6621 13.5332H9.7832C9.71875 13.5332 9.66602 13.5859 9.66602 13.6504C9.66602 16.1216 11.5205 18.1606 13.9141 18.4492V19.9492H11.7856C11.585 19.9492 11.4238 20.1587 11.4238 20.418V20.9453C11.4238 21.0098 11.4648 21.0625 11.5146 21.0625H17.4854C17.5352 21.0625 17.5762 21.0098 17.5762 20.9453V20.418C17.5762 20.1587 17.415 19.9492 17.2144 19.9492H15.0273V18.4565C17.4487 18.1929 19.334 16.1421 19.334 13.6504Z" fill={darkSoft} />
            </svg>
        )
    } else {
        return null
    }
}


export function stripHtml(html) {
    if (html) {
        const regex = /(<([^>]+)>)/ig;
        const result = html.replace(regex, '');
        return result
    } else {
        return false
    }

}

export function formataDataBr(data) {
    var dia = data.split("-")[0];
    var mes = data.split("-")[1];
    var ano = data.split("-")[2];

    return ano + '/' + ("0" + mes).slice(-2) + '/' + ("0" + dia).slice(1);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export function validateSenha(senha) {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
    return senhaRegex.test(String(senha))
}

export function validateName(nome) {
    nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
    // Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres. Aceita acentuação e rejeita números.

    // Faz a validacao do regex no campo indicado
    if (!(nomeSobrenome.test(nome))) {
        return false
    } else {
        return true
    }
}

export function verifyApiAutorization(user) {

    const tokenApi = ""
    if (user.api_token != undefined && user.api_token != "") {
        return user.api_token
    } else {
        return tokenApi
    }

}