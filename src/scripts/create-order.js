import "../css/index.css"

import '../css/create-order.css'
import CreateOrderService from "./Services/CreateOrderService.js"

const submitButton = document.getElementById("submit")

function generateApiPayload() {
    const price = document.getElementById("price").value
    const quantity = document.getElementById("quantity").value
    const type = document.getElementById("selector").value
    var esopType = document.getElementById("esoptype").value

    var body = {
        price: parseInt(price),
        quantity: parseInt(quantity),
        type
    }

    if (type == "SELL") {
       body["esopType"] = esopType
    }

    return body
}

submitButton.onclick = async (e) => {
    e.preventDefault()

    var userName = document.getElementById("username").value

    let createOrderService = new CreateOrderService()
    
    let response = createOrderService.placeOrder(generateApiPayload(), userName)

    console.log(response)
    console.log("HEre")


}


function toggleESOPInput() {
    const currentType = document.getElementById("selector").value

    if (currentType == "BUY") {
        console.log(document.getElementById("esopsection").classList)
        document.getElementById("esopsection").classList.add("hidden")
    }
    else {
        document.getElementById("esopsection").classList.remove("hidden")
    }
}