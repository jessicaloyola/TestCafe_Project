import { Selector, t } from 'testcafe'

class HomePage{
    constructor (){
        this.loginRef = Selector('._3XsmI li [href="/users/showlogin"]')
    }

}
export default new HomePage