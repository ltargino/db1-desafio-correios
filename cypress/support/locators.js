const locators = {
    BUTTONS:{
        CloseCookie: '#btnCookie',
        IDontKnowTheZipCode: ':nth-child(8) > .f2col',
        Search: '#btn_pesquisar',
        TypeBox: '#spanTipoEmbalagem > div > div.window > div > div:nth-child(1) > div > p > button',
        Calculate: '#spanBotao > input',
        CloseModalZipCode: '#cboxClose'

    },

    MENU: {
        NationalPricesAndDeadlinesSimulator: '.card-dropdown > ul > li:nth-child(1) > a'
        
    },

    INPUTS: {
        ZipCodeAddress: '#endereco',
        OriginZipCode: ':nth-child(7) > label > .f2col',
        DestinationZipCode: ':nth-child(10) > label > .f2col'

    },

    SELECTS: {
        ServiceType: 'body > div.back > div.tabs > div:nth-child(2) > div > div > div.column2 > div.content.trescolunas > div.ctrlcontent > form > div > div > span:nth-child(14) > label > select',
        BoxFormat: '#spanFormato > img.caixa',
        TypeOfPackaging: '#spanEmbalagemCaixa > label > select',
        EstimatedWeight: '#spanServicoSelecionado > span:nth-child(13) > label > select'
        

    },    

    TABLES: {
        DNECResult : '#resultado-DNEC',
    },

    IFRAMES: {
        cboxIFrame: '.cboxIframe'
    },

    LABELS: {
        BoxName: '#spanTipoEmbalagem > div > div.window > div > div:nth-child(1) > div > p > span'
    },

}
export default locators;