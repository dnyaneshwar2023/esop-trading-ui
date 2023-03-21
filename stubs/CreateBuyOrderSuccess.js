import CreateOrderService from "../src/scripts/CreateOrderService";

export default class CreateBuyOrderSuccess extends CreateOrderService {
    placeOrder = async (body, userName) => {
        return JSON.stringify({
            orderId: 1,
            quantity: body?.quantity,
            price: body?.price
        })
    }
}