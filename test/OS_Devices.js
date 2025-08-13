import { expect } from "chai";
// nama test
describe('Testing Devices API Demos', () => {
    it('Mencoba Test OS Devices by API Demos', async () => {
        console.log('Testing OS Devices');
        expect(true).to.equal(true);
        // locator
        const buttonOS = await $('//android.widget.TextView[@content-desc="OS"]');
        await buttonOS.click();
        const osScreen = await $('//android.widget.TextView[@content-desc="OS"]');
        expect(osScreen).to.exist;
    });
})