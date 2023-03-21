import OrderHistoryService from "../src/scripts/OrderHistoryService";


describe("Order History Tests", () => {
    it("should get order history of the user given user exits", async () => {
        let orderHistoryService = new OrderHistoryService()
        const history = await orderHistoryService.getOrderHistory("amaan").then((orders) => {
            return orders;
        }).catch((error) => {
            return [];
        })
        

        expect(history).toEqual([])
    })

    it("should return error given user doesn't exits", async () => {
        let orderHistoryService = new OrderHistoryService()
        const history = await orderHistoryService.getOrderHistory("am").then((orders) => {
            return orders;
        }).catch((error) => {
            return [];
        })

        expect(history).toEqual({ "errors": ["User doesn't exist."] })
    })
})