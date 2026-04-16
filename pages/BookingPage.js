export class BookingPage {
    constructor(page) {
        this.page = page;
        this.firstname = '#firstname';
        this.lastname = '#lastname';
        this.email = '#email';
        this.phone = '#phone';
        this.bookBtn = 'button:has-text("Book")';
    }

    async open() {
        await this.page.locator('#booking form').isVisible();
    }

    async fillForm(data) {
        if (data.firstname) await this.page.fill(this.firstname, data.firstname);
        if (data.lastname) await this.page.fill(this.lastname, data.lastname);
        if (data.email) await this.page.fill(this.email, data.email);
        if (data.phone) await this.page.fill(this.phone, data.phone);
    }

    async submit() {
        await this.page.click(this.bookBtn);
    }
}