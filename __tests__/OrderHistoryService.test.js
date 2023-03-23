import { baseURL } from "../src/scripts/CONSTANTS";
import getOrderHistory from "../src/scripts/Services/OrderHistoryService";


describe("Order History Tests", () => {
    it("should get order history of the user", async () => {
        let mockUser = "dnyaneshwar"
        let mockResponse = [
            { orderId: 1, price: 10, quantity: 10, type: "BUY" }
        ]

        let mockFecth = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(mockResponse)
            });
        });

        global.fetch = mockFecth

        let orderHistory = await getOrderHistory(mockUser)
        expect(orderHistory).toEqual(mockResponse)
        expect(mockFecth).toHaveBeenCalledTimes(1)
        expect(mockFecth).toHaveBeenCalledWith(`${baseURL}/user/${mockUser}/order`, { method: "GET" })
    })

    it("should return error message when there is an error fetching order history", async () => {
        let mockUser = "dnyaneshwar_ware"

        let mockFecth = jest.fn().mockImplementation(() => {
            return Promise.reject()
        });

        global.fetch = mockFecth

        let orderHistory = await getOrderHistory(mockUser)
        expect(orderHistory).toEqual([])
        expect(mockFecth).toHaveBeenCalledTimes(1)
        expect(mockFecth).toHaveBeenCalledWith(`${baseURL}/user/${mockUser}/order`, { method: "GET" })
    })
})