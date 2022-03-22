const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require("../pageObjects/basepage");
var webdriver = require('selenium-webdriver');

 class LoginPage extends BasePage{

  btnEnter() {return driver.findElement(By.css("div.HeadBanner-ButtonsWrapper a+*"))}
  fieldUsername() {return driver.findElement(By.id("passp-field-login"))}
  btnSignin() {return driver.findElement(By.id("passp:sign-in"))}
  fieldPassword() {return driver.findElement(By.id("passp-field-passwd"))}
  
  getUsernameHint() {
    return driver.findElement(By.id("field:input-login:hint")).getText()
  }
  getPasswordHint() {
    return driver.findElement(By.id("field:input-passwd:hint")).getText()
  }
  getAccountName() {
    return  driver.findElement(By.xpath("//*[@id='js-apps-container']/div[2]/div[7]/div/div[2]/div/div/div[3]/div/div/a[1]/span[1]"))
      .getText();
  }  
}

module.exports = new LoginPage();