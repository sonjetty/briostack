var Page = require('./page')

 

class customersTab extends Page {
        /**
         * define elements
         */
        get viewNewCustomers () { return $('(//a[contains(@href, "/office/customers/list")])[2]'); }
        get viewServices () { return $('(//a[contains(@href, "/office/customers/findServices")])[2]'); }

        //Old Customers View Selectors
        get findButton () { return $('//div[text() = "Find"]'); }

        //***********New Customers View Selectors*************
        get newCustomerButton () { return $('//div/span[@class = "icon-plus"]'); }
        //Step 1 Selectors
        get branchDropdown () { return $('//div[text() = " Branch "]/p-dropdown'); }
        get accountTypeDropdown () { return $('//div[text() = " Account Type "]/p-dropdown'); }
        get marketingCampaignDropdown () { return $('//div[text() = " Marketing Campaign "]/p-dropdown'); }
        get channelDropdown () { return $('//div[text() = " Channel "]/p-dropdown'); }
        get fieldFirstName () { return $('//input[@formcontrolname = "firstName"]'); }
        get fieldLastName () { return $('//input[@formcontrolname = "lastName"]'); }

        
        /**
         * define or overwrite page methods
         */
        
        //fills out all dropdowns for step 1 of adding a new customer
        competeStep1Dropdowns (step1Dropdown, index){
            let step1DropdownSelectors = [
                'Branch',
                'Account Type',
                'Marketing Campaign',
                'Channel',
                'State',
                'County',
                'Country'
            ];
            if(step1Dropdown != undefined){
                $(`//div[text() = " ${step1DropdownSelectors[index]} "]/p-dropdown`).scroll();
                $(`//div[text() = " ${step1DropdownSelectors[index]} "]/p-dropdown`).waitForVisible();
                $(`//div[text() = " ${step1DropdownSelectors[index]} "]/p-dropdown`).click();
                browser.keys(step1Dropdown);
                $(`//span[text() = "${step1Dropdown}"]`).waitForVisible();
                $(`//span[text() = "${step1Dropdown}"]`).click();
            }
    
        }
        
      
  }

module.exports = new customersTab();