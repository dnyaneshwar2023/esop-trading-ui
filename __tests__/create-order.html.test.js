const { JSDOM } = require("jsdom");
const fs = require("fs");

const html = fs.readFileSync("src/create-order.html");
const { window } = new JSDOM(html);
const { document } = window;

describe("ESOP Trading Platform", () => {
    let usernameInput;
    let esopSelector;

    beforeEach(() => {
        usernameInput = document.getElementById("username");
        esopSelector = document.getElementById("esoptype");
    });

    it("has the correct title", () => {
        expect(document.title).toBe("Create Order");
    });

    it("username input should be empty by default", () => {
        expect(usernameInput.value).toBe("");
    });

    it("esop type select value should be NON_PERFORMANCE by default", () => {
        expect(esopSelector.value).toBe("NON_PERFORMANCE");
    });


    it('ESOP type should contain only "NON_PERFORMANCE" and "PERFORMANCE"', () => {
        const esopType = document.getElementById("esoptype");
        const allowedOptions = ["NON_PERFORMANCE", "PERFORMANCE"];

        const esopOptions = Object.keys(esopType.options).map(
            (key) => esopType[key].text
        );

        expect(esopOptions.length).toEqual(2);
        expect(allowedOptions.sort()).toEqual(esopOptions.sort());
    });

    it('order type should contain only "BUY" and "SELL" option', () => {
        const orderType = document.getElementById("selector");
        const allowedOptions = ["SELL", "BUY"];

        const options = Object.keys(orderType.options).map(
            (key) => orderType[key].text
        );

        expect(options.length).toEqual(2);
        expect(allowedOptions.sort()).toEqual(options.sort());
    });
});
