import { Selector, t } from 'testcafe'

class InboxPage{
    constructor (){
        //delete task
        this.checkboxButton = Selector('.task_checkbox__circle')
        this.deleteItemButton = Selector('.icon_menu_item__content').withExactText('Delete task')
        this.confirmDeleteButton = Selector('.ist_button_red').withExactText('Delete')
        //validate task
        this.itemList = Selector('.task_list_item')
        this.dueDateIcon = Selector('.date')

    }

    async deleteEveryTask(){
        let itemCount = await this.itemList.count
        if (itemCount > 0){
            for (let i = 0; i < itemCount; i ++){
                await t.rightClick(this.checkboxButton)
                await t.click(this.deleteItemButton)
                await t.click(this.confirmDeleteButton)
            }
        }
        await t.expect(this.itemList.exists).notOk()
    }

    async validateAddedTasks(taskname, numberOfTask, dueDate){
        for (let i = 0; i < numberOfTask; i ++){
            let currentTaskText = await this.itemList.nth(i).innerText
            let currentDueDateText = await this.dueDateIcon.nth(i).innerText
            let taskNameComplete = taskname + " " + i
            if (currentTaskText.includes(taskNameComplete) == false || currentDueDateText == dueDate == false){
                return false
            }
        } 
        return true
    }

}

export default new InboxPage