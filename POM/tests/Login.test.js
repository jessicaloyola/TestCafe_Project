import logInPage from '../pages/LogInPage'
import productsPage from '../pages/ProductsPage'
import {URLS, CREDENTIALS, MESSAGES } from '../data/Constants'
import { STANDARD_USER } from 'Roles'


fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`
    
test.only('As a user I should be able to log in successfully by providing valid credentials', async t => {
        await t.useRole(STANDARD_USER)
        await t.expect(productsPage.pageTitle.exists).ok()
})

test('As a user I should be able to log in successfully by providing valid credentials', async t => {
    await logInPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(productsPage.pageTitle.exists).ok()
})

test('As a user I should not be able to log in successfully by providing any credentials', async t => {
    await t.setTestSpeed(0.3)
    await logInPage.submitLoginForm(null, null)
    await t.expect(logInPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.USERNAME_REQUIRED)
})