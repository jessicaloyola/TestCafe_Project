import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    STANDARD_USER:{
        USERNAME: process.env.STANDARD_USER,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    }
}

export const MESSAGES = {
    ERROR:{
        LOGIN_PAGE:{
            USERNAME_REQUIRED: 'Epic sadface: Username is required'
        }
    }
}
