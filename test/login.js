const loginPage = require('../pageObjects/loginpage');
const { until } = require("selenium-webdriver");
const {Builder, By, Key} = require("selenium-webdriver");
var should = require("chai").should();

describe("The Page login and registr", () => {

  let baseURL = "https://mail.yandex.by/";
  let validUsername = "finalprojecttest";
  let validpassword = "Test111";

  it("successfully login", async () => {
    await loginPage.visit(baseURL);
    await loginPage.btnEnter().click();
    await loginPage.fieldUsername().sendKeys(validUsername);
    await loginPage.btnSignin().click();
    await loginPage.fieldPassword().sendKeys(validpassword);
    await loginPage.btnSignin().click();
    await console.log(loginPage.getAccountName());
    await loginPage.getAccountName().should.equal(validUsername); 
 
  });

  // it("wrong login", async () => {
  //   let driver = await new Builder().forBrowser("chrome").build();
  //   await driver.get("https://mail.yandex.by/");
  //   await driver.findElement(By.css("div.HeadBanner-ButtonsWrapper a+*")).click();
  //   await driver.findElement(By.id("passp-field-login")).sendKeys("111");
  //   await driver.findElement(By.id("passp:sign-in")).click();

  //   let todoText=await driver.wait(until.elementLocated(By.id("field:input-login:hint")),5000).getText().then(e => {return e})

  //   todoText.should.equal("Такой логин не подойдет")
  //   await driver.quit();

  // });

  // it.only("wrong pass", async () => {
  //   let driver = await new Builder().forBrowser("chrome").build();
  //   await driver.get("https://mail.yandex.by/");
  //   await driver.findElement(By.css("div.HeadBanner-ButtonsWrapper a+*")).click();
  //   await driver.findElement(By.id("passp-field-login")).sendKeys("finalprojecttest");
  //   await driver.findElement(By.id("passp:sign-in")).click();
  //   await driver.wait(until.elementLocated(By.id("passp-field-passwd")),5000).then(e =>e.sendKeys("111"))
  //   await driver.findElement(By.id('passp:sign-in')).click();
  //   let todoText=await driver.wait(until.elementLocated(By.id("field:input-passwd:hint")),5000).getText().then(e => {return e})

  //   console.log(todoText);

  //   todoText.should.equal("Неверный пароль")
  //   // await driver.quit();

  // });


});




