const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require("../pageObjects/basepage");
var webdriver = require('selenium-webdriver');

class LoginPage extends BasePage{

  btnEnter() {return driver.findElement(By.css("div.HeadBanner-ButtonsWrapper a+*"))}
  fieldUsername() {return driver.findElement(By.id("passp-field-login"))}
  btnSignin() {return driver.findElement(By.id("passp:sign-in"))}
  fieldPassword() {return driver.findElement(By.id("passp-field-passwd"))}
  usernameHint() {return driver.findElement(By.id("field:input-login:hint"))}
  passwordHint() {return driver.findElement(By.id("field:input-passwd:hint"))}
  async getAccountName() {
    return await driver.findElement(By.className("user-account__name")).getText()
  }  
  // driver.findElement(By.className("user-account__name")).getText().then( t => {return t})

  

  // enter_search(searchText){
  //   driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
  //   driver.findElement(By.css('input[name=q]')).sendKeys(Key.RETURN);
  // }
}

module.exports = new LoginPage();