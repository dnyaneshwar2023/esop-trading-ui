import placeOrder from "../src/scripts/Services/CreateOrderService";

describe("Create Order Tests", () => {
    it("should create an order", async () => {
        let body = { price: 10, quantity: 10, type: "BUY" };
        let mockResponse = { orderId: 1, price: 10, quantity: 10, type: "BUY" };
        const mockUser = "dnyaneshwar";

        const mockFetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(mockResponse),
            });
        });
        global.fetch = mockFetch;

        let response = await placeOrder(body, mockUser);

        expect(mockFetch).toHaveBeenCalledWith(
            `http://localhost:8080/user/${mockUser}/order`,
            {
                method: "POST",
                body: JSON.stringify({ ...body }),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
        expect(mockFetch).toHaveBeenCalledTimes(1)
        expect(response).toEqual(mockResponse);
    });

    it("should throw an error if order placement fails", async () => {
        const body = { price: 10, quantity: 10, type: "BUY" };
        const userName = "dnyaneshwar";
        const error = new Error("Failed to place order");
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.reject(error);
        });
        await expect(placeOrder(body, userName)).rejects.toThrow(error);
    });
});
