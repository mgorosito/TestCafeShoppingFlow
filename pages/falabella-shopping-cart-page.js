import { Selector, t } from 'testcafe';

export default class FalabellaShoppingCartPage{
	
    constructor () {
        this.increaseProductButton = Selector('.fb-quantity-input__plus');
        this.extendedWarrantyDropdown = Selector('.fb-inline-dropdown__link.js-inline-dropdown__link')
        this.warrantyOptions = Selector('.fb-inline-dropdown__list-item ')
        this.buyButton = Selector('.fb-btn.fb-btn-primary.fb-btn-icon.fb-order-status__continue-purchase.js-fb-continue-purchase')

    }

    async increaseProduct(){
        await t.click(this.increaseProductButton);
    }

    async selectExtendedWarrantyYears(years){
        await t.click(this.extendedWarrantyDropdown);
        await t.click(this.warrantyOptions.nth(years))
    }

    async buy(){
        await t.click(this.buyButton);
    }

}