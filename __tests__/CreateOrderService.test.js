
import CreateOrderService from "../src/scripts/CreateOrderService"

describe("Create Order Tests", () => {
    let createOrderService = new CreateOrderService()

    it("should throw an error if order placement fails", async () => {
        const body = { price: 10, quantity: 10, type: "BUY" };
        const userName = "dnyaneshwar";
        const error = new Error("Failed to place order");
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.reject(error);
        });
        await expect(createOrderService.placeOrder(body, userName)).rejects.toThrow(error);
    });

    
})