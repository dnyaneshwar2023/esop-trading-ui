const fs = require("fs");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync("src/order-history.html");
const { window } = new JSDOM(html);
const { document } = window;

describe("Order History page", () => {
    let usernameInput;
    let submitButton;
    let ordersContainer;
    let orderForm;
    
    beforeEach(() => {
        usernameInput = document.getElementById("username");
        submitButton = document.getElementById("submit");
        ordersContainer = document.getElementById("orders");
        orderForm = document.getElementById("orderForm");
    });

    it('page title should be "Order History"', () => {
        expect(document.title).toBe("Order History");
    });

    it("username input should be empty by default", () => {
        expect(usernameInput.value).toBe("");
    });

    it("submitting the form should show orders in the orders container", () => {
        usernameInput.value = "dnyaneshwar";
        orderForm.submit();

        expect(ordersContainer.textContent).toContain("");
    });
});
