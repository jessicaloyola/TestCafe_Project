import { Selector } from 'testcafe'

class TodayPage{
    constructor (){
        this.pageTitle = Selector('.simple_content').withExactText('Today')
    }
}

export default new TodayPage