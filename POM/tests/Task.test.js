import homePage from '../pages/HomePage'
import todayPage from '../pages/TodayPage'
import basePage from '../pages/BasePage'
import inboxPage from '../pages/InboxPage'
import {STANDARD_USER} from '../data/Roles'
import {TASK_INFO, URLS} from '../data/Constants'
import { t } from 'testcafe'

fixture('Task feature test')
    .page `${URLS.HOME_URL}`
    .beforeEach(async () =>{
        await t.click(homePage.loginRef)
        await t.useRole(STANDARD_USER)
    })
    .afterEach(async () =>{
        await t.wait(3000)
        await t.click(basePage.inboxMenuButton)
        await t.wait(3000)
        await inboxPage.deleteEveryTask()
        await t.wait(3000)
    })

test.meta('type','smoke')('As a user I should be able to create a new task with today as the due date and validate it was created correctly', async () => {
    await todayPage.addTasks(TASK_INFO.TASK_NAME, TASK_INFO.ONE_NEW_TASK, TASK_INFO.TODAY_DUEDATE)
    await t.click(basePage.inboxMenuButton)
    await t.expect(await inboxPage.validateAddedTasks(TASK_INFO.TASK_NAME, TASK_INFO.ONE_NEW_TASK, TASK_INFO.TODAY_DUEDATE)).ok()
})

test('As a user I should be able to create a new task with tomorrow as the due date and validate it was created correctly', async () => {
    await todayPage.addTasks(TASK_INFO.TASK_NAME, TASK_INFO.ONE_NEW_TASK, TASK_INFO.TOMORROW_DUEDATE)
    await t.click(basePage.inboxMenuButton)
    await t.expect(await inboxPage.validateAddedTasks(TASK_INFO.TASK_NAME, TASK_INFO.ONE_NEW_TASK, TASK_INFO.TOMORROW_DUEDATE)).ok()
})

test('As a user I should be able to create 10 tasks with today as the due date and validate it was created correctly', async () => {
    await todayPage.addTasks(TASK_INFO.TASK_NAME, TASK_INFO.TEN_NEW_TASKS, TASK_INFO.TODAY_DUEDATE)
    await t.click(basePage.inboxMenuButton)
    await t.expect(await inboxPage.validateAddedTasks(TASK_INFO.TASK_NAME, TASK_INFO.TEN_NEW_TASKS, TASK_INFO.TODAY_DUEDATE)).ok()
})

test.meta('type','smoke')('As a user I should be able to delete every task created', async () => {
    await todayPage.addTasks(TASK_INFO.TASK_NAME, TASK_INFO.THREE_NEW_TASKS, TASK_INFO.TODAY_DUEDATE)
    await t.click(basePage.inboxMenuButton)
    await inboxPage.deleteEveryTask()
    await t.expect(inboxPage.itemList.exists).notOk()

})

