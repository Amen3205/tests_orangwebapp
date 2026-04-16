export class HomePage {
  constructor(page) {
    this.page = page;
    this.rooms = '.room-card'; 
    this.bookBtn = 'a.btn-primary'; 
    this.checkin = 'input[placeholder="Check in"]';
    this.checkout = 'input[placeholder="Check out"]';
    this.searchBtn = 'button:has-text("Check Availability")';
    this.error = '.error';
  }

  async goTo() {
    await this.page.goto('https://automationintesting.online/');
  }

  async clickBook() {
    await this.page.click(this.bookBtn);
  }

  async search(checkin, checkout) {
    await this.page.waitForSelector(this.checkin, { timeout: 10000 });
    await this.page.fill(this.checkin, checkin);
    await this.page.fill(this.checkout, checkout);
    await this.page.click(this.searchBtn);
  }
}