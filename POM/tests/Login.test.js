import logInPage from '../pages/LogInPage'
import homePage from '../pages/HomePage'
import todayPage from '../pages/TodayPage'
import { STANDARD_USER , INVALID_USER } from '../data/Roles'
import {URLS, CREDENTIALS, MESSAGES } from '../data/Constants'


fixture('Login feature test')
    .page `${URLS.HOME_URL}`
    
test('As a user I should be able to log in successfully by providing valid credentials', async t => {
    await t.setTestSpeed(0.3)
    await homePage.clicLoginLink()
    await logInPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.setTestSpeed(0.3)
    await t.expect(todayPage.pageTitle.exists).ok()
})

test('As a user I should be able to not log in by providing invalid credentials', async t => {
    await t.setTestSpeed(0.3)
    await homePage.clicLoginLink()
    await logInPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(logInPage.errorEmailMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})

test('As a user I should be able to not log in by providing no user', async t => {
    await t.setTestSpeed(0.3)
    await homePage.clicLoginLink()
    await logInPage.submitLoginForm(null, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(logInPage.errorEmailMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})

test('As a user, I should not be able to log in when a password is not provided', async t => {
    await t.setTestSpeed(0.3)
    await homePage.clicLoginLink()
    await logInPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, null)
    await t.expect(logInPage.errorPasswordMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.BLANK_PASSWORD)
})

