import { Selector, t } from 'testcafe'
import { PROJECT_INFO } from '../data/Constants'


class BasePage{
    constructor(){
        this.inboxMenuButton = Selector('#filter_inbox')
        //create new project
        this.newProjectButton = Selector('.adder_icon')
        this.projectNameLabel = Selector('#edit_project_modal_field_name')
        this.colorSelection = Selector('.color_dropdown_toggle')
        this.colorSelected = Selector('.color_dropdown_select__name')
        this.addtoFavoriteSwitch = Selector('.reactist_switch')
        this.addFavoriteProjectButton = Selector('.ist_button_red')
        //clean before
        this.projectBaseMenu = Selector('.expansion_panel__toggle').withText("Projects")
        this.projectsCount = Selector('.indent_1')
        this.projectGearMenu = Selector('.gear_menu')
        this.projectGearMenuDelete = Selector('#menu_delete_text')
        this.confirmDeleteButton = Selector('.ist_button_red').withExactText('Delete')
    }

    async createNewProject(projectName, projectColor, isFavoriteFlag){
        await t.click(this.newProjectButton)
        await t.typeText(this.projectNameLabel, projectName, {paste: true})
        await t.click(this.colorSelection)
        await t.click(this.colorSelected.withExactText(projectColor))
        if (isFavoriteFlag == true){
            await t.click(this.addtoFavoriteSwitch)
            await t.click(this.addFavoriteProjectButton)
        }
    }

    async cleanProjectBefore(){
        let projectCount = await this.projectsCount.count
        if (projectCount > 0){
            for (let i = 0; i < projectCount; i ++){
                await t.click(this.projectBaseMenu)
                await t.click(this.projectBaseMenu)
                await t.click(this.projectsCount)
                await t.click(this.projectGearMenu)
                await t.click(this.projectGearMenuDelete)
                await t.click(this.confirmDeleteButton)
            }
        }
    }
}

export default new BasePage