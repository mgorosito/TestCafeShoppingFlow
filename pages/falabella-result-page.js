import { Selector, t } from 'testcafe';

export default class FalabellaResultPage{
	
    constructor () {
        this.results = Selector('.pod-item');
    }

    async clickOnFirstResult(){
        await t.click(this.results.nth(0))
    }

}