import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { testBase, CommonUI } from "../../utilities/docuport-ui-utilities";
import { appInfo } from "../../utilities/beta-data-reader";

testBase.describe("Login - describe - beforeEach", () => {
    let loginPage;
    let homePage;

  testBase.beforeEach("Before each", async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });

  testBase("Client login", { tag: "@smoke" }, async ({ page }) => {
    // const loginPage = new LoginPage(page);
    await loginPage.loginAs("client");
    // const homePage = new HomePage(page);
    await homePage.validatePageFor("client");
  });

  testBase("Advisor login", { tag: "@smoke" }, async ({ page }) => {
    // const loginPage = new LoginPage(page);
    await loginPage.loginAs("advisor");
    // const homePage = new HomePage(page);
    await homePage.validatePageFor("advisor");
  });
});
