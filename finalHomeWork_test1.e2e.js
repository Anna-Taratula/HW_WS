const assert = require('assert');

const email = "example@email123.com"
const password = "SuperPassword1234!"
const login = "superPerfectUserName"
const optionValue = "y"

const countinueButtonSelector = ".signup-continue-step-container[data-step-state=active] .signup-continue-button"
const containerAtributeName = "data-step-state"

describe("GitHub main page", () => {
    it("should have present typing effect content", async () => {
        await browser.url('https://www.github.com/');

        let buttonSignUp = await $('.HeaderMenu-link.HeaderMenu-link--sign-up')
        
        try {
            await buttonSignUp.click()
        } catch (error) {
            buttonSignUp = await $('.d-inline-block.d-lg-none.flex-order-1')
            await buttonSignUp.click()
        }

        await browser.waitUntil(async () => {
            return $('.text-mono.text-gray-light-mktg').isDisplayed();
            }, 5000, "Typing effect content is not displayed")
        
    });

    
    it("should have entered email", async () => {

        
        let inputEmail = await $('#email')
        await inputEmail.waitForDisplayed({ timeout: 3000 })
        await inputEmail.addValue(email)

        expect(email === await inputEmail.getValue())

        
    })


    it("should have clicked button countinue after entering email", async () => {

        let buttonCountinue = await $(countinueButtonSelector)
        await buttonCountinue.waitForEnabled({ timeout: 3000 });
        await buttonCountinue.click()

        await buttonCountinue.waitForDisplayed({ reverse : true });
        let emailContainerAttribute = await $('#email-container').getAttribute(containerAtributeName)

        assert("complete" === emailContainerAttribute)

    })

    it("should have entered password", async () => {
        
        let inputPasswod = await $('#password')
        await inputPasswod.waitForDisplayed({ timeout: 3000 })
        await inputPasswod.addValue(password)

        expect(email === await inputPasswod.getValue())

        
    })

    it("should have clicked button countinue after entering passwod", async () => {

        let buttonCountinue = await $(countinueButtonSelector)
        await buttonCountinue.waitForEnabled({ timeout: 3000 });
        await buttonCountinue.click()

        await buttonCountinue.waitForDisplayed({ reverse : true });
        let passwordContainerAttribute = await $('#password-container').getAttribute(containerAtributeName)

        assert("complete" === passwordContainerAttribute)
        
    })

    it("should have entered login", async () => {
        
        let inputLogin = await $('#login')
        await inputLogin.waitForDisplayed({ timeout: 3000 })
        await inputLogin.addValue(login)

        expect(login === await inputLogin.getValue())

        
    })

    it("should have clicked button countinue after entering login", async () => {

        let buttonCountinue = await $(countinueButtonSelector)
        await buttonCountinue.waitForEnabled({ timeout: 3000 });
        await buttonCountinue.click()

        await buttonCountinue.waitForDisplayed({ reverse : true });
        let loginContainerAttribute = await $('#username-container').getAttribute(containerAtributeName)

        assert("complete" === loginContainerAttribute)

        await browser.pause(2222)
    })

    it("should have entered option container", async () => {
        
        let inputOptionContainer = await $('#opt_in')
        await inputOptionContainer.waitForDisplayed({ timeout: 3000 })
        await inputOptionContainer.addValue(optionValue)

        expect(optionValue === await inputOptionContainer.getValue())

    })

    it("should have clicked button countinue after entering option value", async () => {

        let buttonCountinue = await $(countinueButtonSelector)
        await buttonCountinue.waitForEnabled({ timeout: 3000 });
        await buttonCountinue.click()

        await buttonCountinue.waitForDisplayed({ reverse : true });
        let optionContainerAttribute = await $('#opt-in-container').getAttribute(containerAtributeName)

        assert("complete" === optionContainerAttribute)

        await browser.pause(2000)
    })
});