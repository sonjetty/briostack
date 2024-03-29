var Page = require('./page')
 

class basicUtils extends Page {
        /**
         * define elements
         */
        get brioAdmin () { return $('//a[@id = "adminLink"]'); }
        get threeDotButtonForSelectedItem () { return $('//div[@class = "is-selected item-template-card css-v42dwu enh2y1w0"]//i[@class = "list-dots-vertical"]'); }
        get tabAdmin () { return $('//span[@class = "icon-admin"]'); }
        get tabAccounting () { return $('//span[@class = "icon-accounting"]'); }
        get tabReports () { return $('//span[@class = "icon-reports"]'); }
        get tabTasks () { return $('//span[@class = "icon-tasks"]'); }
        get tabScheduling () { return $('//span[@class = "icon-scheduling"]'); }
        get tabCustomers () { return $('//span[@class = "icon-customers"]'); }
        get tabDashboard () { return $('//span[@class = "icon-dashboard"]'); }

        

        
        /**
         * define or overwrite page methods
         */
        loginWebCommand (user, password){
            browser.url('https://testmaster.briostack.com/brycetraining/');
            $('//input[@name="USERNAME"]').waitForVisible();
            $('//input[@name="USERNAME"]').setValue(`${user}`);
            $('//input[@name="PASSWORD"]').waitForVisible();
            $('//input[@name="PASSWORD"]').setValue(`${password}`);
            $('//button[text()="Login"]').waitForVisible();
            $('//button[text()="Login"]').click();
            $('//input[@id="username"]').waitForVisible();
            $('//input[@id="username"]').setValue(`${user}`);
            $('//button[@type ="submit"]').click();
            $('//input[@type="password"]').waitForVisible();
            $('//input[@type="password"]').setValue(`${password}`);
            $('//button[@type ="submit"]').waitForVisible();
            $('//button[@type ="submit"]').click();
        }
        goToApp (app){ //app can be "office", "sales", "tech", "admin", "webtools", or "customer"
            $(`//a[@id = "${app}Link"]`).waitForVisible();
            $(`//a[@id = "${app}Link"]`).click();
        }
        goToTab (){
            //to be continued...
        }
  }

module.exports = new basicUtils();