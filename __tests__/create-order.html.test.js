const { JSDOM } = require("jsdom");
const fs = require("fs");

const html = fs.readFileSync("src/create-order.html");
const { window } = new JSDOM(html);
const { document } = window;


describe("ESOP Trading Platform", () => {
    let usernameInput
    let esopSelector

    beforeEach(() => {
        usernameInput = document.getElementById("username")
        esopSelector = document.getElementById("esoptype")
    });

    it("has the correct title", () => {
        expect(document.title).toBe("Create Order");
    });

    it("username input should be empty by default", () => {
        expect(usernameInput.value).toBe("");
    });

    it("esop type select value should be NORMAL by default", () => {
        expect(esopSelector.value).toBe("NON_PERFORMANCE");

    })



});