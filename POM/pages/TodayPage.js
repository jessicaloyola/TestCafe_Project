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
        this.checkboxButton = Selector('.task_checkbox__circle')
        this.itemList = Selector('.task_list_item')
        this.deleteItemButton = Selector('.icon_menu_item__content').withExactText('Delete task')
        this.confirmDeleteButton = Selector('.ist_button_red').withExactText('Delete')
        //no va aqui
        this.newProjectCreated = Selector('h1 .simple_content').withExactText(TASK_INFO.PROJECT_NAME) 
        this.projectHeaderActionsButton = Selector('[aria-label="Project options menu"]');
        this.deleteProjectButton = Selector('.icon_menu_item__content').withExactText('Delete project')
        this.cancelNewTaskButton = Selector('.reactist_button--secondary').withExactText('Cancel')
    }

    async addTasks(numberofTask, duedate){
        await t.click(this.plusAddbutton)
        for (let i = 0; i < numberofTask; i ++){
            await t.typeText(this.titleTaskblock, TASK_INFO.TASK_NAME + " " + i, {paste: true})
            if (duedate == false){
                await t.click(this.itemDueSelectorbutton)
                await t.click(this.tomorrowDueButton)
            }
            await t.click(this.addNewTaskbutton)
        }
        await t.click(this.cancelNewTaskButton)
        
        let itemCount = await this.itemList.count
        //modificar codigo
        if (itemCount >= numberofTask) 
            await t.expect(itemCount).ok
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
        await t.expect(this.itemList).notOk()
    }

    async cleanProjectWorkspace(){
        await t.click(this.projectHeaderActionsButton)
        await t.click(this.deleteProjectButton)
        await t.click(this.confirmDeleteButton)
    }

}

export default new TodayPage