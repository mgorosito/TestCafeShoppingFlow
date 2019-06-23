import { Selector, t } from 'testcafe';

export default class GoogleResultPage{
	
    constructor () {
        this.results = Selector('.LC20lb');
    }

    async clickResultLinkWithText(text){
        await t.click(this.results.withText(text))
    }

}