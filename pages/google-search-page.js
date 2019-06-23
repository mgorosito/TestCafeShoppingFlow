import { Selector, t } from 'testcafe';

export default class GoogleSearchPage{
	
    constructor () {
        this.searchInput = Selector('.gLFyf.gsfi');
        this.submitButton = Selector('.gNO89b');
    }

    async searchFor(keyword){
        await t.typeText(this.searchInput, keyword)
        await t.click(this.submitButton)
    }

}