import homePage from '../pages/HomePage'
import todayPage from '../pages/TodayPage'
import basePage from '../pages/BasePage'
import { STANDARD_USER , INVALID_USER } from '../data/Roles'
import {URLS, CREDENTIALS } from '../data/Constants'
import logInPage from '../pages/LogInPage'


fixture('Login feature test')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await homePage.clicLoginLink()
        await logInPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    })

test.meta('type','smoke')('As a user I should be able to create a new task with today as the due date and validate it was created correctly', async t => {
    await t.setTestSpeed(0.3)
    await todayPage.addNewTodayTask()
})


test('As a user I should be able to create a new task with tomorrow as the due date and validate it was created correctly', async t => {
    await t.setTestSpeed(0.3)
    await todayPage.addNewTomorrowTask()
    await basePage.upcomingEvents()
    await t.expect(todayPage.newCreatedTask.exists).ok()
})

test('As a user I should be able to create 10 tasks with today as the due date and validate it was created correctly', async t => {
    await t.setTestSpeed(0.3)
    await todayPage.addTenTodayTasks()
})

test.meta('type','smoke')('As a user I should be able to create a new project with a color and add it to my favorites', async t => {
    await t.setTestSpeed(0.3)
    await basePage.createNewFavoriteProject()
})

test.only.meta('type','smoke')('As a user I should be able to delete every task created', async t => {
    await t.setTestSpeed(0.3)
    await basePage.goToInbox()
    await todayPage.deleteEveryTask()
})

