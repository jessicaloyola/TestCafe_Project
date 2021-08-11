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

export const TASK_INFO = {
    TASK_NAME: "New task created",
    TEN_NEW_TASKS: 10,
    THREE_NEW_TASKS: 3,
    ONE_NEW_TASK: 1,
    TODAY_DUEDATE: "Today",
    TOMORROW_DUEDATE: "Tomorrow"
}

export const PROJECT_INFO = {
    PROJECT_NAME: 'Wizeline project',
    PROJECT_COLOR: 'Teal'
}