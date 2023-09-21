const assert = require('assert');

const searchPageTitle = "Repository search results · GitHub"
const searchText = "text"

describe("GitHub search page", () => {
    it("should have cklicable suscribe button", async () => {
        await browser.url('https://www.github.com/');
        
        let searchField = await $('span[class=\'flex-1\']')
    
        try {

            await searchField.click()

        } catch (error) {

            let navBar = await $('button[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]')
            await navBar.click()

            searchField = await $('button[placeholder="Search or jump to..."]')
            await searchField.click()
        }
        
    });

    it("should have added text to search input field", async () => {
        
        let inputSearchField = await $('#query-builder-test')
    
        await inputSearchField.addValue(searchText)
        await browser.keys("Enter")
        
    });

    it("should have opened search page", async () => {
        
        await browser.keys("Enter")

        await browser.waitUntil(async () => {
            return await browser.getTitle() === searchPageTitle
            }, 10000, "Failed subscribtion")
        
    });

    it("should have correct search results", async () => {
        
        let resultCard = await $('//a/span/em[contains(text(), \'text\')]')
        console.log("Text = " + await resultCard.getText())

        assert(await resultCard.getText() === searchText)
        
        await browser.pause(2000)
    });
});