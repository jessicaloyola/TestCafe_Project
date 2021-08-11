import {Selector, t} from 'testcafe'

class ProjectPage{
    constructor (){
        this.projectHeaderActionsButton = Selector('[aria-label="Project options menu"]');
        
        //validate project
        this.editProjectButton = Selector('.icon_menu_item__content').withExactText('Edit project')
        this.projectNameInput = Selector('#edit_project_modal_field_name')
        this.projectColorDropdown = Selector('.color_dropdown_select__name')
        this.favoriteCheckbox = Selector('.reactist_switch')
        this.cancelEditButton = Selector('.ist_button').withExactText('Cancel')

        //clean project workspace
        this.deleteProjectButton = Selector('.icon_menu_item__content').withExactText('Delete project')
        this.confirmDeleteButton = Selector('.ist_button_red').withText('Delete')

    }

    async validateProject(projectName, projectColor, isFavoriteFlag){
        await t.click(this.projectHeaderActionsButton)
        await t.click(this.editProjectButton)

        let validProject = {
            name: await this.projectNameInput.value,
            color: await this.projectColorDropdown.innerText,
            isFavorite: await this.favoriteCheckbox.hasClass('reactist_switch--checked')
        }
        if (validProject.name == projectName && validProject.color == projectColor && validProject.isFavorite==isFavoriteFlag){
            await t.click(this.cancelEditButton)
            return true  
        } 
        return false
    }

    async cleanProjectWorkspace(){
        await t.click(this.projectHeaderActionsButton)
        await t.click(this.deleteProjectButton)
        await t.click(this.confirmDeleteButton)
    }

}
export default new ProjectPage