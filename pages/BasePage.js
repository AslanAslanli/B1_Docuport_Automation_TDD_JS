export class BasePage {
    
  constructor(page) {
    // Preventing creating object of BasePage
    if (new.target === BasePage) {
      throw new Error("BasePage cannot be initialized");
    }
    this.page = page;
  }

  locator(selector) {
    return this.page.locator(selector);
  }
  
  
}
