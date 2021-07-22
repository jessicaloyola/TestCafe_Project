import { Selector, t } from 'testcafe'

class BasePage{
    constructor(){
        this.burgerMenuButton = Selector('#react-burger-menu-btn')
        this.logOutButton = Selector('#logout_sidebar_link')
        this.upcomingMenuButton = Selector('#filter_upcoming')
    }

    async logOut(){
        await t.click(this.burgerMenuButton)
        await t.click(this.logOutButton)
        
    }

    async upcomingEvents(){
        await t.click(this.upcomingMenuButton)
    }

}

export default new BasePage