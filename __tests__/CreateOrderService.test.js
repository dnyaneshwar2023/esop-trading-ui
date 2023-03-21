import CreateOrderService from "../src/scripts/CreateOrderService"
import OrderHistoryService from "../src/scripts/OrderHistoryService"
import CreateBuyOrderSuccess from "../stubs/CreateBuyOrderSuccess"

describe("Create Order Tests", () => {
    let createOrderService = new CreateOrderService()

    it("should return error given insufficient amount in wallet for buy order", async () => {
        let response = await createOrderService.placeOrder({
            price: 10,
            quantity: 10,
            type: "BUY"
        }, "amaan")

        expect(response).toEqual(["Insufficient amount in wallet"])
    })

    it("should create buy order", async() => {
        let buyorderService = new CreateBuyOrderSuccess()

        let response = JSON.parse(await buyorderService.placeOrder({price: 10,
            quantity: 10,
            type: "BUY"}, "amaan"))
        
        expect(response.price).toEqual(10)

    })

    
})