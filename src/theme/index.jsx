//link gerar paleta de cores http://mcg.mbitson.com/#!?primary=%23344955&secundary=%23f9aa33&themename=procob

//Primary
export const primary50 = '#ede5ef';
export const primary100 = '#d2bed7';
export const primary200 = '#b593bd'; //Primary Variant Light
export const primary300 = '#9768a3';
export const primary400 = '#80478f';
export const primary500 = '#6A277B'; //Cor Base Da Aplicação
export const primary600 = '#622373';
export const primary700 = '#571d68'; //Variant Dark
export const primary800 = '#4d175e';
export const primary900 = '#3c0e4b';
export const primaryA100 = '#dd83ff';
export const primaryA200 = '#ce50ff';
export const primaryA400 = '#c01dff';
export const primaryA700 = '#b903ff';

export const primary500Transparent = 'rgba(106,39,123,0.8)'; 

//Secundary
export const secundary50 = '#fcf6e6';
export const secundary100 = '#f8e9c1';
export const secundary200 = '#f4db98';
export const secundary300 = '#efcd6e'; //Cor Secundária
export const secundary400 = '#ebc24f';
export const secundary500 = '#e8b730';
export const secundary600 = '#e5b02b';
export const secundary700 = '#e2a724';
export const secundary800 = '#de9f1e';
export const secundary900 = '#d89013';
export const secundaryA100 = '#ffffff';
export const secundaryA200 = '#ffeed4';
export const secundaryA400 = '#ffdaa1';
export const secundaryA700 = '#ffd088';

export const corDestaque = '#E93D4B';
export const light = '#FFFFFF';
export const dark = '#000000';
export const darkSoft = '#333333';
export const bg = '#F3F3F3';
export const surface = '#FFFFFF';
export const bradius = 3;

export const fontSize32 = '1.2em';
export const fontSize30 = '1.875em';
export const fontSize26 = '1.625em';
export const fontSize24 = '1.5em';
export const fontSize21 = '1.313em';
export const fontSize20 = '1.25em';
export const fontSize18 = '1.125em';
export const fontSize16 = '1em';
export const fontSize14 = '0.875em';
export const fontSize13 = '0.813em';
export const fontSize12 = '0.75em';
export const fontSize10 = '0.625em';
export const fontSize8 = '0.5em;';

//Alerts
export const textSuccess = '#155724';
export const textDanger = '#F44336';
export const textWarning = '#856404';
export const textInfo = '#0c5460';

export const bgSuccess = '#d4edda';
export const bgDanger = '#f8d7da';
export const bgWarning = '#fff3cd';
export const bgInfo = '#d1ecf1';

//Divider
export const divider = primary50;

//Sizes
export const ultraSmall = 10;
export const extraSmall = 13;
export const small = 15;
export const medium = 18;
export const large = 21;
export const extraLarge = 25;

//Gradient
export const gradientStart = '#fff';
export const gradientEnd = '#dddddd';

export const theme = {
    colors: {
        primary: primary500,
        secundary: secundary200,
        light,
        dark,
        bg,
        darkSoft,
        corDestaque,
        surface,
        success:textSuccess,
        error:textDanger,
        divider,
    },
    sizes: {
        ultraSmall,
        extraSmall,
        small,
        medium,
        large,
        extraLarge,
    },
    fonts: {
        web: {
            regular: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'sans-serif-light',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'sans-serif-thin',
                fontWeight: 'normal',
            },
        },
    }
}
