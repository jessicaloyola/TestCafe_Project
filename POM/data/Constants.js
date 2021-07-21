import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    HOME_URL: process.env.HOME_URL,
    LOGIN_URL: process.env.LOGIN_URL
}

export const CREDENTIALS = {
    STANDARD_USER:{
        USERNAME: process.env.STANDARD_USER,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'invalid@mail',
        PASSWORD: 'invalidPassword'
    }
}

export const MESSAGES = {
    ERROR:{
        LOGIN_PAGE:{
            INVALID_EMAIL: 'Invalid email address.',
            BLANK_PASSWORD: 'Blank password.'
        }
    }
}
