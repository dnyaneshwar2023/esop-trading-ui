
import CreateOrderService from "../src/scripts/CreateOrderService"

describe("Create Order Tests", () => {
    let createOrderService = new CreateOrderService()

    it("should create an order", async () => {
        let body = { price: 10, quantity: 10, type: "BUY" }
        let mockResponse = { orderId: 1, price: 10, quantity: 10, type: "BUY" }

        const mockUser = "dnyaneshwar";

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(mockResponse)
            });
        });

        let response = await createOrderService.placeOrder(body, mockUser)

        expect(response).toEqual(mockResponse)

    });

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