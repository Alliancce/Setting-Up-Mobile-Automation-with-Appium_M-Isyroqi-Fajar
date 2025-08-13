import { expect } from "chai";
// nama test
describe('Testing Devices API Demos', () => {

    after(async function () {
        console.log('API Demos');
    });
    
    it('Mencoba Test OS Devices by API Demos', async () => {
        console.log('Testing OS Devices');
        expect(true).to.equal(true);
        // locator
        const buttonOS = await $('//android.widget.TextView[@content-desc="OS"]');


        await buttonOS.click();
        await browser.back();
    });

    it('Mencoba Test App Devices by API Demos', async () => {
        console.log('Testing App Devices');
        expect(true).to.equal(true);
        // locator
        const buttonApp = await $('//android.widget.TextView[@content-desc="App"]');
        const alertdialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        const textentrydialog = await $('//android.widget.Button[@content-desc="Text Entry dialog"]');
        const isiusername = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        const isipassword = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');

        await buttonApp.click();
        await alertdialog.click();
        await textentrydialog.click();
        await isiusername.setValue('Admin');
        await isipassword.setValue('admin123');
    });
});