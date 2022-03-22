var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});
driver.manage().window().maximize();

class BasePage{
  constructor(){
    global.driver = driver;
  }

  visit(theURL){
    driver.get(theURL)
  }

  close(){
     driver.quit();
  }
  
}

module.exports =  BasePage;