import { Selector, t } from 'testcafe'
import { PROJECT_INFO } from '../data/Constants'


class BasePage{
    constructor(){
        this.upcomingMenuButton = Selector('#filter_upcoming')
        this.newProjectButton = Selector('.adder_icon')
        this.projectNameLabel = Selector('#edit_project_modal_field_name')
        this.colorSelection = Selector('.color_dropdown_toggle')
        this.favoriteColorSelection = Selector('.color_dropdown_select__name').withExactText('Teal')
        this.addtoFavoriteSwitch = Selector('.reactist_switch')
        this.addFavoriteProjectButton = Selector('.ist_button_red')
        this.inboxMenuButton = Selector('#filter_inbox')
        this.newProjectCreated = Selector('h1 .simple_content').withExactText(PROJECT_INFO.PROJECT_NAME) 
        this.projectHeaderActionsButton = Selector('[aria-label="Project options menu"]');
        this.deleteProjectButton = Selector('.icon_menu_item__content').withExactText('Delete project')

    }

    async upcomingEvents(){
        await t.click(this.upcomingMenuButton)
    }

    async createNewFavoriteProject(){
        await t.click(this.newProjectButton)
        await t.typeText(this.projectNameLabel, PROJECT_INFO.PROJECT_NAME, {paste: true})
        await t.click(this.colorSelection)
        await t.click(this.favoriteColorSelection)
        await t.click(this.addtoFavoriteSwitch)
        await t.click(this.addFavoriteProjectButton)
    }

    async goToInbox(){
        await t.click(this.inboxMenuButton)
    }

    async cleanProjectWorkspace(){
        await t.click(this.projectHeaderActionsButton)
        await t.click(this.deleteProjectButton)
        await t.click(this.confirmDeleteButton)
    }
}

export default new BasePage