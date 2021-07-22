import { Selector, t } from 'testcafe'
import todayPage from '../pages/TodayPage'

class BasePage{
    constructor(){
        this.burgerMenuButton = Selector('#react-burger-menu-btn')
        this.logOutButton = Selector('#logout_sidebar_link')
        this.upcomingMenuButton = Selector('#filter_upcoming')
        this.newProjectButton = Selector('.adder_icon')
        this.projectNameLabel = Selector('#edit_project_modal_field_name')
        this.newProjectNameText = " Wizeline project"
        this.colorSelection = Selector('.color_dropdown_toggle')
        this.favoriteColorSelection = Selector('.color_dropdown_select__name').withExactText('Teal')
        this.addtoFavoriteSwitch = Selector('.reactist_switch')
        this.addFavoriteProjectButton = Selector('.ist_button_red')
        this.inboxMenuButton = Selector('#filter_inbox')
        this.numberOfTask = Selector('.item_counter').value

        
    }

    async logOut(){
        await t.click(this.burgerMenuButton)
        await t.click(this.logOutButton)
        
    }

    async upcomingEvents(){
        await t.click(this.upcomingMenuButton)
    }

    async createNewFavoriteProject(){
        await t.click(this.newProjectButton)
        await t.typeText(this.projectNameLabel, this.newProjectNameText, {paste: true})
        await t.click(this.colorSelection)
        await t.click(this.favoriteColorSelection)
        await t.click(this.addtoFavoriteSwitch)
        await t.click(this.addFavoriteProjectButton)
    }

    async goToInbox(){
        await t.click(this.inboxMenuButton)
        await todayPage.deleteEveryTask(this.numberOfTask)
    }

}

export default new BasePage