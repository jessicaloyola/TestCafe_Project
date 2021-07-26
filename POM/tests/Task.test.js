import homePage from '../pages/HomePage'
import todayPage from '../pages/TodayPage'
import basePage from '../pages/BasePage'
import { STANDARD_USER} from '../data/Roles'
import {URLS} from '../data/Constants'

fixture('Login feature test')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await homePage.clicLoginLink()
        await t.useRole(STANDARD_USER)
    })

test
    .meta('type','smoke')('As a user I should be able to create a new task with today as the due date and validate it was created correctly', async t => {
        await todayPage.addNewTodayTask()
        await t.expect(todayPage.newCreatedTask.exists).ok()
    })
    .after(async () => {
        await t.wait(3000)
        await todayPage.deleteEveryTask()
    })

test
    ('As a user I should be able to create a new task with tomorrow as the due date and validate it was created correctly', async t => {
        await todayPage.addNewTomorrowTask()
        await basePage.upcomingEvents()
        await t.expect(todayPage.newCreatedTask.exists).ok()
    })
    .after(async () => {
        await t.wait(3000)
        await todayPage.deleteEveryTask()
    })

test
    ('As a user I should be able to create 10 tasks with today as the due date and validate it was created correctly', async t => {
    await todayPage.addTenTodayTasks()
    })
    .after(async () => {
        await basePage.goToInbox()
        await todayPage.deleteEveryTask()
    })

test
    .meta('type','smoke')
    ('As a user I should be able to create a new project with a color and add it to my favorites', async t => {
        await basePage.createNewFavoriteProject()
        await t.expect(todayPage.newProjectCreated.exists).ok()
    })
    .after(async () => {
        await todayPage.cleanProjectWorkspace()
    })

test
    .before(async t => {
        await homePage.clicLoginLink()
        await t.useRole(STANDARD_USER)
    })
    .meta('type','smoke')('As a user I should be able to delete every task created', async t => {
        await basePage.goToInbox()
        await todayPage.deleteEveryTask()
    })

