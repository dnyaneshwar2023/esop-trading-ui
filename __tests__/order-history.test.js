import getOrderHistory from "../src/scripts/getOrders";

describe("Order History Tests", () => {
    it("should get order history of the user", () => {
        const history = getOrderHistory("amaan").then((orders) =>{
            return orders;
        })

        expect(history.length).toEqual(0)
    })
})