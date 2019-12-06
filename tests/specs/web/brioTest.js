import moment from 'moment';
var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('new customers page test', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('bryce.huey@briostack.com', 'theone11')
        basicUtils.goToApp('office')
    });
    
    it('should go to the new customers view inside of customers tab', () => {
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
        customersTab.viewNewCustomers.waitForVisible()
        customersTab.viewNewCustomers.click()
    });
    
    it('should create a new customer', () => {
        //
        let step1Dropdowns = [
            "Main Branch", //Branch
            "Commercial",  //Account Type
            undefined,     //Marketing Campaign
            "Radio",       //Channel
            "Utah",        //State
            "Utah",        //County
            undefined      //Country
        ];

        customersTab.newCustomerButton.waitForVisible()
        customersTab.newCustomerButton.click()
        customersTab.branchDropdown.waitForVisible()

        for (let index = 0; index < step1Dropdowns.length; index++) {
            customersTab.competeStep1Dropdowns(step1Dropdowns[index], index)      
        }

        customersTab.fieldFirstName.setValue('Jim')
        customersTab.fieldLastName.setValue('Smith')
        browser.pause(50000)
    });

});