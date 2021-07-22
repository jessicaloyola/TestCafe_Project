import { Selector, t } from 'testcafe'
import { TASK_INFO } from '../data/Constants'


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
        this.numberOfTask = Selector('.item_counter')
        this.itemList = Selector('.task_list_item')

    }

    async upcomingEvents(){
        await t.click(this.upcomingMenuButton)
    }

    async createNewFavoriteProject(){
        await t.click(this.newProjectButton)
        await t.typeText(this.projectNameLabel, TASK_INFO.PROJECT_NAME, {paste: true})
        await t.click(this.colorSelection)
        await t.click(this.favoriteColorSelection)
        await t.click(this.addtoFavoriteSwitch)
        await t.click(this.addFavoriteProjectButton)
    }

    async goToInbox(){
        await t.click(this.inboxMenuButton)
    }
}

export default new BasePage