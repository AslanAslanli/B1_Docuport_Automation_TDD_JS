/*
write a function that finds the larger num. 2 valu input 
*/

// function findLargestNumber(...nums) {
//   let largestNum = nums[0];

//   for (const eachNum of nums) {
//     if (eachNum > largestNum) {
//         largestNum = eachNum;
//     }
//   }

//   return largestNum;

// }

// console.log(findLargestNumber(-12, -45, -55, -1000));

/*
find total occurance of each word 
*/

// function wordCounter(word, strOfWords) {
//   word = word.toLowerCase();
//   strOfWords = strOfWords.toLowerCase();

//   let counter = 0;

//   for (let i = 0; i < strOfWords.length; i++) {
//     if (strOfWords.startsWith(word, i)) {
//       counter++;
//       // maximizing O(n) complexity
//       i += word.length;
//     }
//   }

//   return counter;
// }

// console.log(
//   wordCounter("acer", "jfgkdgkf acer sjdksjnfks acer fskcererfsjfkdsfk acer"),
// );

/*
playwright test that opens saucedemo website and enters login creds
*/

import { test, expect } from "@playwright/test";
import { log } from "node:console";

// const credentials = {
//   username: "standard_user",
//   password: "secret_sauce",
// };

// test.describe("Sauyce Demo Tests", () => {
//   let usernameElement;
//   let passwordElement;
//   let loginButton;

//   let errorMessage;
//   let productsText;
//   const urlSauce = "https://www.saucedemo.com/";

//   test.beforeEach("Before each", async ({ page }) => {
//     await page.goto(urlSauce);
//     usernameElement = page.getByPlaceholder("Username");
//     passwordElement = page.getByPlaceholder("Password");
//     loginButton = page.getByRole("button", {name: "Login"});
//   });

//   test("SauceDemo Login test", { tag: "@login" }, async ({ page }) => {
//     await usernameElement.fill(credentials.username);
//     await passwordElement.fill(credentials.password);
//     // await page.waitForTimeout(2000);
//     await loginButton.click();

//     await expect(page.locator("//span[.='Products']")).toBeVisible();
//   });

//   test("SauceDemo Login test - Negative", { tag: "@loginNegative" }, async ({ page }) => {
//     await usernameElement.fill("wrong username");
//     await passwordElement.fill("wrong");

//     await loginButton.click();
//     // await page.waitForTimeout(2000);

//     await expect(page.locator("//h3[.='Epic sadface: Username and password do not match any user in this service']")).toBeVisible();
//     await expect(page.locator("//span[normalize-space(.)='Products']")).toBeHidden();
//     //expect(page.locator("//span[.='Products']")).toBeNull();
//   });
// });

/**
 * land to herokuapp checkbox link
 * click on 1st checkbox
 * unclick the 2nd
 */
let checkbox1;
let checkbox2;

test("Checkbox clikcing", async ({ page }) => {
  // https://the-internet.herokuapp.com/checkboxes?utm_source
  await page.goto("/checkboxes?utm_source");

  checkbox1 = page.locator("//input[@type='checkbox'][1]");
  checkbox2 = page.locator("//input[@type='checkbox'][2]");

  await checkbox1.check();
  //await page.waitForTimeout(3000);
  await checkbox2.uncheck();
  //await page.waitForTimeout(3000);

  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).not.toBeChecked();
});
