import { Selector, t } from 'testcafe'
import { PROJECT_INFO } from '../data/Constants'


class BasePage{
    constructor(){
        this.newProjectButton = Selector('.adder_icon')
        this.projectNameLabel = Selector('#edit_project_modal_field_name')
        this.colorSelection = Selector('.color_dropdown_toggle')
        this.colorSelected = Selector('.color_dropdown_select__name')
        this.addtoFavoriteSwitch = Selector('.reactist_switch')
        this.addFavoriteProjectButton = Selector('.ist_button_red')
        this.inboxMenuButton = Selector('#filter_inbox')
        this.newProjectCreated = Selector('h1 .simple_content').withExactText(PROJECT_INFO.PROJECT_NAME) 
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
}

export default new BasePage