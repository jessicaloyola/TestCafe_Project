import { Selector, t } from 'testcafe'
import { TASK_INFO } from '../data/Constants'

class TodayPage{
    constructor (){
        this.pageTitle = Selector('.simple_content').withExactText('Today')
        this.plusAddbutton = Selector('.plus_add_button')
        this.titleTaskblock= Selector('.public-DraftStyleDefault-ltr')
        this.addNewTaskbutton= Selector('.reactist_button--primary')
        this.newCreatedTask = Selector('.task_content').withExactText(TASK_INFO.TASK_NAME)
        this.itemDueSelectorbutton = Selector('.item_due_selector')
        this.tomorrowDueButton = Selector('.scheduler-suggestions-item-label').withExactText('Tomorrow')
        this.cancelNewTaskButton = Selector('.reactist_button--secondary').withExactText('Cancel')
    }

    async addTasks(taskName, numberOfTask, dueDate){
        await t.click(this.plusAddbutton)
        for (let i = 0; i < numberOfTask; i ++){
            await t.typeText(this.titleTaskblock, taskName + " " + i, {paste: true})
            if (dueDate == "Tomorrow"){
                await t.click(this.itemDueSelectorbutton)
                await t.click(this.tomorrowDueButton)
            }
            await t.click(this.addNewTaskbutton)
        }
        await t.click(this.cancelNewTaskButton)
    }

}

export default new TodayPage