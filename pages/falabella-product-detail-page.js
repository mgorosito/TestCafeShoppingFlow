import { Selector, t } from 'testcafe';

export default class FalabellaProductDetailPage{
	
    constructor () {
        this.addToShoppingCartButton = Selector('.fb-btn.fb-btn-primary.fb-product-cta__controls--actions--choose.full-width-btn');
        this.goToShoppingCartButton = Selector('.fb-masthead-basket__icon.icon-bag-green');
        this.modalCloseButton = Selector('#fb-modal-add > div.fb-added-to-basket__header-and-body > div.fb-added-to-basket__header > div:nth-child(3) > button > span.icon-close').nth(1)
    }

    async addItemToShoppingCart(){
        await t.click(this.addToShoppingCartButton);
    }

    async closeSummaryModalAndGoToShoppingCart(){
      	await t
      		.click(this.modalCloseButton)
      		.click(this.goToShoppingCartButton);
    }
}