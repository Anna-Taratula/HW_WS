const assert = require('assert');

const expectedH2Text = "The place for anyone from anywhere to build anything"
const expectedH1TextOnEnterprisePricingPage = "Pick your trial plan"
const linkEnterprisePage = "https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"

let buttonStartAFreeEnterpriseTrial

describe("GitHub Enterprise pricing plan page", () => {
    it("should have expected text in h2", async () => {
        await browser.url('https://www.github.com/');

        let h2ThePlaceForAnyone = await $('.color-fg-default.mb-3.h3-mktg.col-lg-8.mx-md-auto.px-3')
        await h2ThePlaceForAnyone.scrollIntoView({ block: 'center', inline: 'nearest' })
        let textFromH2 = await h2ThePlaceForAnyone.getText()

        assert(await h2ThePlaceForAnyone.isDisplayedInViewport() == true)
        
        assert(textFromH2 === expectedH2Text)
        
        await browser.pause(2000)
    });



    it("should have link to be visible", async () => {

        buttonStartAFreeEnterpriseTrial = await $('.btn-mktg.btn-large-mktg.btn-muted-mktg')

        assert(await buttonStartAFreeEnterpriseTrial.isDisplayed() == true)
        
    });

    it("should have go to Enterprise pricing plan page", async () => {

        await buttonStartAFreeEnterpriseTrial.click()
        
        await browser.waitUntil(async () => {
            return await browser.getUrl() == linkEnterprisePage
            }, 5000, "Enterprise page is not opened")
        
    });

    it("should have expected text in h1 on Enterprise pricing plan page", async () => {

        let h1Container = await $('.h1')
        let textFromH1 = await h1Container.getText()
        
        assert(textFromH1 === expectedH1TextOnEnterprisePricingPage)
        
    });

    it("should have click on pricing recommended plan", async () => {
        
        let buttonPricingRecommendedPlan = await $('.pricing-recommended-plan')
        await buttonPricingRecommendedPlan.click()
        
        await browser.pause(2000)
    });
    
});