import CreateOrderService from "../src/scripts/CreateOrderService"
import OrderHistoryService from "../src/scripts/OrderHistoryService"

describe("Create Order Tests", () => {
    let createOrderService = new CreateOrderService()

    it("should return error given insufficient amount in wallet", async () => {
        let response = await createOrderService.placeOrder({
            price: 10,
            quantity: 10,
            type: "BUY"
        }, "amaan")

        expect(response).toEqual(["Insufficient amount in wallet"])
    })

    it("should return error given user doesn't exits", async () => {
        
        expect({}).toEqual({ })
    })
})