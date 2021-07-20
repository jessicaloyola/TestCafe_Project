import { Selector, t } from 'testcafe'

class BasePage{
    constructor(){
        this.burgerMenuButton = Selector('#react-burger-menu-btn')
        this.logOutButton = Selector('#logout_sidebar_link')
    }

    async logOut(){
        await t.click(this.burgerMenuButton)
        await t.click(this.logOutButton)
        
    }

}

export default new BasePage