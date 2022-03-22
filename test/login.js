const loginPage = require('../pageObjects/loginpage');
const { until } = require("selenium-webdriver");
const {Builder, By, Key} = require("selenium-webdriver");
var should = require("chai").should();


describe("The Page login", () => {

  var baseURL = "https://mail.yandex.by/";
  let validUsername = "finalprojecttest";
  let wrongUsername = "1111";
  let validpassword = "Test111";
  let wrongPassword = "2222"
  
  
  beforeEach(() => {

  });

  afterEach(() => {

  })


  it("successfully login", async () => {
    await loginPage.visit(baseURL);
    await loginPage.btnEnter().click();
    await loginPage.fieldUsername().sendKeys(validUsername);
    await loginPage.btnSignin().click();
    await loginPage.fieldPassword().sendKeys(validpassword);
    await loginPage.btnSignin().click();

    let accountName =  await loginPage.getAccountName();
    await accountName.should.equal(validUsername);
    await loginPage.close();
  });

  it("wrong username", async () => {
    await loginPage.visit(baseURL);
    await loginPage.btnEnter().click();
    await loginPage.fieldUsername().sendKeys(wrongUsername);
    await loginPage.btnSignin().click();

    let usernameHint = await loginPage.getUsernameHint();
    await usernameHint.should.equal("Такой логин не подойдет");
    await loginPage.close();
  });

  it("wrong password", async () => {
    await loginPage.visit(baseURL);
    await loginPage.btnEnter().click();
    await loginPage.fieldUsername().sendKeys(validUsername);
    await loginPage.btnSignin().click();
    await loginPage.fieldPassword().sendKeys(wrongPassword);
    await loginPage.btnSignin().click();

    let passwordHint = await loginPage.getPasswordHint();
    await passwordHint.should.equal("Неверный пароль");
    await loginPage.close();
  });
});




