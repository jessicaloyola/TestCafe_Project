import logInPage from '../pages/LogInPage'
import homePage from '../pages/HomePage'
import productsPage from '../pages/ProductsPage'
import todayPage from '../pages/TodayPage'
import basePage from '../pages/BasePage'
import { STANDARD_USER , INVALID_USER } from '../data/Roles'
import {URLS, CREDENTIALS, MESSAGES } from '../data/Constants'


fixture('Login feature test')
    .page `${URLS.HOME_URL}`
    //.beforeEach(async t =>{
    //    await LogInPage.submitLoginForm

    //})
    //.afterEach(async t =>{
    //    await basePage.logOut()
    //})
    
test.only('As a user I should be able to log in successfully by providing valid credentials', async t => {
    await t.setTestSpeed(0.3)
    //await t.useRole(STANDARD_USER)
    await homePage.clicLoginButton(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.setTestSpeed(0.6)
    await t.expect(todayPage.pageTitle.exists).ok()
})

test('As a user I should be able to not log in by providing invalid credentials', async t => {
    await t.setTestSpeed(0.3)
    await logInPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(logInPage.errorEmailMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})

test('As a user I should be able to not log in by providing no user', async t => {
    await t.setTestSpeed(0.3)
    await logInPage.submitLoginForm(null, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(logInPage.errorEmailMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})

test('As a user I should be able to not log in by providing no password', async t => {
    await t.setTestSpeed(0.3)
    await logInPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, null)
    await t.expect(logInPage.errorPasswordMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.BLANK_PASSWORD)
})










test.skip('As a user I should be able to log in successfully by providing valid credentials', async t => {
    await logInPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(productsPage.pageTitle.exists).ok()
})

test.skip.meta('type','smoke')('As a user I should not be able to log in successfully by providing any credentials', async t => {
    await t.setTestSpeed(0.3)
    await logInPage.submitLoginForm(null, null)
    await t.expect(logInPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.USERNAME_REQUIRED)
})

test.skip('As a user I should be able to log out sucessfully from burger menu', async t => {
    await t.useRole(STANDARD_USER)
    await basePage.logOut()
    await t.expect(logInPage.loginButton.exists).ok()
})