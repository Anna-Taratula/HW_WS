const assert = require('assert');

const linkSuscribePage = "https://resources.github.com/newsletter/"
const expectedHeaderH1Text = "Subscribe to our developer newsletter"
const successfullSubscribeText = "Thanks for subscribing!"

const email = "example@email123.com"

describe("GitHub subscribe page", () => {
    it("should have cklicable suscribe button", async () => {
        await browser.url('https://www.github.com/');

        let buttonSubscribe = await $('//a[@class=\'btn-mktg mb-4 btn-muted-mktg\']')
        await buttonSubscribe.scrollIntoView({ block: 'center', inline: 'nearest' })

        assert(await buttonSubscribe.isClickable() == true)

        await buttonSubscribe.click()
        
    });

    it("should have go to subscribe page", async () => {
        
        await browser.waitUntil(async () => {
            return await browser.getUrl() == linkSuscribePage
            }, 5000, "Subscribe page is not opened")
        
    });

    it("should have expected header on Subscribe page", async () => {

        let headerH1Container = await $('#hero-section-brand-heading')
        let textFromHeaderH1 = await headerH1Container.getText()
        
        assert(textFromHeaderH1 === expectedHeaderH1Text)
        
    });

    it("should have added email to input field", async () => {

        let inputEmail = await $('input[type="email"]')
        await inputEmail.scrollIntoView({ block: 'center', inline: 'nearest' })

        await inputEmail.addValue(email)

    });

    it("should have select Zimbabwe country", async () => {

        let selctList = await $('.Primer_Brand__Select-module__Select-wrapper___iV0Tg')
        await selctList.click()

        let countriZimbabwe = await $('option[value="ZW"]')
        await countriZimbabwe.click()

    });

    it("should have select checkbox", async () => {

        let checkbox = await $('#gated-agree-marketingEmailOptin1')
        await checkbox.click()
             
    });

    it("should have cklick subscribe button", async () => {

        let buttonSubscribe = await $('button[type="submit"]')
        await buttonSubscribe.click()
               
    });


    it("should have go to successful subscribe page", async () => {
        
        let headerSuccesfullSuscribe = await $('#hero-section-brand-heading')
        
        await browser.waitUntil(async () => {
            return await headerSuccesfullSuscribe.getText() === successfullSubscribeText
            }, 5000, "Failed subscribtion")
        
            await browser.pause(2000)
    });

});