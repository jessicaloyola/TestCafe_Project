import { Selector, t } from 'testcafe'

class LoginPage{
    constructor (){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.sel_login').withText('Log in')
        this.errorEmailMessage = Selector('.error_msg').withText('Invalid email address.')
        this.errorPasswordMessage = Selector('.error_msg').withText('Blank password.')

        //this.loginRef = Selector('._3XsmI li [href="/users/showlogin"]')

    }

    async submitLoginForm(username, password){

        //await t.click(this.loginRef)
        if (username != null){
            await t.typeText(this.usernameInput, username, {paste: true})
        }
        if (password != null ){
            await t.typeText(this.passwordInput, password, {paste: true})
        }
        await t.click(this.loginButton)
    }

}
export default new LoginPage