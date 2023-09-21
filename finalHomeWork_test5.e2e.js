const assert = require('assert');

const headerPricingPageText = "Get the complete developer platform."
const headerCompareFuturesText = "Compare features"

describe("GitHub search page", () => {
    it("should have opened pricing page", async () => {
        await browser.url('https://www.github.com/');
        
        let linkPricing = await $('.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')
    
        try {

            await linkPricing.click()

        } catch (error) {

            let navBar = await $('button[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]')
            await navBar.click()

            linkPricing = await $('.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')
            await linkPricing.click()
        }
        
    });

    it("should have expected header on Pricing page", async () => {
        
        let headerPricingPage = await $('h1[class=\'h2-mktg\']')
        
        await browser.waitUntil(async () => {
            return await headerPricingPage.getText() === headerPricingPageText
            }, 5000, "Failed subscribtion")
        
    });

    it("should have cklicked link: compare all futures", async () => {

        let linkCompareFutures = await $('.d-flex.flex-column.flex-items-center.flex-justify-center.h5-mktg')
        await linkCompareFutures.scrollIntoView({ block: 'center', inline: 'nearest' })

        await linkCompareFutures.click()       

    });

    it("should have compare features header", async () => {

        let headerCompareFutures = await $('.h1')
        await headerCompareFutures.scrollIntoView({ block: 'center', inline: 'nearest' })

        assert(await headerCompareFutures.getText() === headerCompareFuturesText)      

        await browser.pause(2000)

    });
    
});