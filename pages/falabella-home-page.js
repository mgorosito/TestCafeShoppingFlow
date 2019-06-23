import { Selector, t } from 'testcafe';

export default class FalabellaHomePage{
	
    constructor () {
        this.searchInput = Selector('.fb-masthead-search__box__input');
        this.submitButton = Selector('.icon-search.fb-masthead__util-bar__icon');
    }

    async searchFor(keyword){
        await t.typeText(this.searchInput, keyword)
        await t.click(this.submitButton)
    }

}