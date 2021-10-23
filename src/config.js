//=================================== CHANGE ENVIRONMENT ==================================
const option = 'development'
//=========================================================================================

function env(env) {
    switch (env) {
        case 'local':
            return {
                url:'http://162.243.165.91:1337',
                token:'5uN0HUdtFZ8alIOzi14p',
                secret: 'palolo',
            }
        case 'development':
             return {
                 url:'http://162.243.165.91:1337',
                 token:'5uN0HUdtFZ8alIOzi14p',
                 secret: 'palolo',
            }
        default:
            return {
                url:'http://162.243.165.91:1337',
                tokenFs:'5uN0HUdtFZ8alIOzi14p',
                token: 'palolo',
            }
    }
}

module.exports ={
    api:          env(option).url,
    SECRET_TOKEN: env(option).token,
    Token:        env(option).tokenFs,
}
