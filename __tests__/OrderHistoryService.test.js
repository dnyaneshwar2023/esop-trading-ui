import OrderHistoryService from "../src/scripts/OrderHistoryService";


describe("Order History Tests", () => {
    it("should get order history of the user", async () => {
        let orderHistoryService = new OrderHistoryService()
        let mockUser = "dnyaneshwar"
        let mockResponse = [
            { orderId: 1, price: 10, quantity: 10, type: "BUY" }
        ]

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(mockResponse)
            });
        });

        let orderHistory = await orderHistoryService.getOrderHistory(mockUser)
        console.log(orderHistory)
        expect(orderHistory).toEqual(mockResponse)
    })

    it("should return error message when there is an error fetching order history", async () =>{
        let orderHistoryService = new OrderHistoryService()
        let mockUser = "dnyaneshwar_ware"

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.reject()
        });

        let orderHistory = await orderHistoryService.getOrderHistory(mockUser)
        console.log(orderHistory)
        expect(orderHistory).toEqual([])
    })
})