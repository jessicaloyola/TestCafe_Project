import { Selector, t } from 'testcafe'
import logInPage from '../pages/LogInPage'

class HomePage{
    constructor (){
        this.loginRef = Selector('._3XsmI li [href="/users/showlogin"]')
    }

    async clicLoginLink(){
        await t.click(this.loginRef)
        //await logInPage.submitLoginForm(username, password)
    }

}
export default new HomePage