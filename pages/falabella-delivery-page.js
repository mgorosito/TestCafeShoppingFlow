import { Selector, t } from 'testcafe';

export default class FalabellaDeliveryPage{
	
    constructor () {
    }

    async getTitle(){
        return Selector('title').textContent
     }

}