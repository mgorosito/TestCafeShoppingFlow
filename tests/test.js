import GoogleSearchPage from '../pages/google-search-page';
import GoogleResultPage from '../pages/google-result-page';
import FalabellaHomePage from '../pages/falabella-home-page';
import FalabellaResultPage from '../pages/falabella-result-page';
import FalabellaProductDetailPage from '../pages/falabella-product-detail-page';
import FalabellaShoppingCartPage from '../pages/falabella-shopping-cart-page';
import FalabellaDeliveryPage from '../pages/falabella-delivery-page';


const googleSearchPage = new GoogleSearchPage();
const googleResultPage = new GoogleResultPage();
const falabellaHomePage = new FalabellaHomePage();
const falabellaResultPage = new FalabellaResultPage();
const falabellaProductDetailPage = new FalabellaProductDetailPage();
const falabellaShoppingCartPage = new FalabellaShoppingCartPage();
const falabellaDeliveryPage = new FalabellaDeliveryPage();

const url = 'https://www.google.cl'


fixture('Shopping').page(url);


test('Purchase flow', async t => { 
	await googleSearchPage.searchFor('falabella')
    await googleResultPage.clickResultLinkWithText('Falabella.com - Mejor Compra Online')
    await falabellaHomePage.searchFor('ps4')   
    await falabellaResultPage.clickOnFirstResult()
    await falabellaProductDetailPage.addItemToShoppingCart()
    await falabellaProductDetailPage.closeSummaryModalAndGoToShoppingCart()
    await falabellaShoppingCartPage.increaseProduct()
    await falabellaShoppingCartPage.selectExtendedWarrantyYears(2)
    await falabellaShoppingCartPage.buy()
    const deliveryPageTitle = await falabellaDeliveryPage.getTitle()
	await t.expect(deliveryPageTitle).eql('Despacho - Falabella.com')
});