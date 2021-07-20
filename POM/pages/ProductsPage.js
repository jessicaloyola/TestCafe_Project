import { Selector } from 'testcafe'

class ProductsPage{
    constructor (){
        this.pageTitle = Selector('.title').withExactText('PRODUCTS')
    }
}

export default new ProductsPage