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
        this.newProjectCreated = Selector('h1 .simple_content').withExactText(TASK_INFO.PROJECT_NAME)
        this.projectHeaderActionsButton = Selector('[aria-label="Project options menu"]');
        this.deleteProjectButton = Selector('.icon_menu_item__content').withExactText('Delete project')
    }

    async addNewTodayTask(){
        await t.click(this.plusAddbutton)
        await t.typeText(this.titleTaskblock, TASK_INFO.TASK_NAME, {paste: true})
        await t.setTestSpeed(0.3)
        await t.click(this.addNewTaskbutton)
    }

    async addNewTomorrowTask(){
        await t.click(this.plusAddbutton)
        await t.typeText(this.titleTaskblock, TASK_INFO.TASK_NAME, {paste: true})
        await t.click(this.itemDueSelectorbutton)
        await t.click(this.tomorrowDueButton)
        await t.setTestSpeed(0.3)
        await t.click(this.addNewTaskbutton)
        await t.setTestSpeed(0.3)
    }

    async addTenTodayTasks(){
        await t.click(this.plusAddbutton)
        for (let i = 0; i < 10; i ++){
            await t.typeText(this.titleTaskblock, TASK_INFO.TASK_NAME + " " + i, {paste: true})
            await t.setTestSpeed(0.3)
            await t.click(this.addNewTaskbutton)
        }
        let itemCount = await this.itemList.count
        if (itemCount >= 10)
            await t.expect(itemCount).ok
    }

    async addThreeTasks(){
        await t.click(this.plusAddbutton)
        for (let i = 0; i < 3; i ++){
            await t.typeText(this.titleTaskblock, TASK_INFO.TASK_NAME + " " + i, {paste: true})
            await t.setTestSpeed(0.3)
            await t.click(this.addNewTaskbutton)
        }
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
        if (itemCount == 0)
            await t.expect(itemCount).ok
    }

    async cleanProjectWorkspace(){
        await t.click(this.projectHeaderActionsButton)
        await t.click(this.deleteProjectButton)
        await t.click(this.confirmDeleteButton)
    }

}

export default new TodayPage