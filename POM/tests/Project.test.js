import homePage from '../pages/HomePage'
import basePage from '../pages/BasePage'
import projectPage from '../pages/ProjectPage'
import {STANDARD_USER} from '../data/Roles'
import {PROJECT_INFO, URLS} from '../data/Constants'

fixture('Project feature test')
    .page `${URLS.HOME_URL}`
    .beforeEach(async t =>{
        await t.click(homePage.loginRef)
        await t.useRole(STANDARD_USER)
        await basePage.cleanProjectBefore()
    })

test
    .meta('type','smoke')('As a user I should be able to create a new project with a color and add it to my favorites', async t => {
        await basePage.createNewProject(PROJECT_INFO.PROJECT_NAME, PROJECT_INFO.PROJECT_COLOR, true)
        await t.expect(await projectPage.validateProject(PROJECT_INFO.PROJECT_NAME, PROJECT_INFO.PROJECT_COLOR, true)).ok()
    })
    .after(async () => {
        await projectPage.cleanProjectWorkspace()
    })

