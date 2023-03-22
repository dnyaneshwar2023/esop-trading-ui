const { JSDOM } = require("jsdom");
const fs = require("fs");

describe("ESOP Trading Platform", () => {
    let dom;

    beforeEach(() => {
        const html = fs.readFileSync("src/index.html");
        dom = new JSDOM(html);
    });

    afterEach(() => {
        dom.window.close();
    });

    it("has the correct title", () => {
        expect(dom.window.document.title).toBe("Welcome");
    });

    it("has a link to create-order.html", () => {
        const link = dom.window.document.querySelector(
            'a[href="./create-order.html"]'
        );
        expect(link).toBeTruthy();
    });

    it("has a link to order-history.html", () => {
        const link = dom.window.document.querySelector(
            'a[href="./order-history.html"]'
        );
        expect(link).toBeTruthy();
    });
});