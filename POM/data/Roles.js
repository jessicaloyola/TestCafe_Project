import { Role } from 'testcafe'
import loginPage from '../pages/LogInPage'
import { URLS, CREDENTIALS } from './Constants'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async () =>{
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, {
    preserveUrl: true
})
