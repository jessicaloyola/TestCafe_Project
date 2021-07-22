import { Selector, t } from 'testcafe'

class TodayPage{
    constructor (){
        this.pageTitle = Selector('.simple_content').withExactText('Today')
        this.plusAddbutton = Selector('.plus_add_button')
        this.titleTaskblock= Selector('.public-DraftStyleDefault-ltr')
        this.addNewTaskbutton= Selector('.reactist_button--primary')
        this.newTaskText = "New task created"
        this.newCreatedTask = Selector('.task_content').withExactText(this.newTaskText)
        this.itemDueSelectorbutton = Selector('.item_due_selector')
        this.tomorrowDueButton = Selector('.scheduler-suggestions-item-label').withExactText('Tomorrow')
        
    }

    async addNewTodayTask(){
        await t.click(this.plusAddbutton)
        await t.typeText(this.titleTaskblock, this.newTaskText, {paste: true})
        await t.setTestSpeed(0.3)
        await t.click(this.addNewTaskbutton)

    }

    async addNewTomorrowTask(){
        await t.click(this.plusAddbutton)
        await t.typeText(this.titleTaskblock, this.newTaskText, {paste: true})
        await t.click(this.itemDueSelectorbutton)
        await t.click(this.tomorrowDueButton)
        await t.setTestSpeed(0.3)
        await t.click(this.addNewTaskbutton)
        await t.setTestSpeed(0.3)
    }

    async addTenTodayTasks(){

        await t.click(this.plusAddbutton)
        await t.typeText(this.titleTaskblock, this.newTaskText, {paste: true})
        await t.click(this.itemDueSelectorbutton)
        await t.click(this.tomorrowDueButton)
        await t.setTestSpeed(0.3)
        await t.click(this.addNewTaskbutton)
        await t.setTestSpeed(0.3)
    
    }
}

export default new TodayPage