import "../css/index.css"

import '../css/create-order.css'

const submitButton = document.getElementById("submit")

submitButton.onclick = async (e) => {
    const price = document.getElementById("price").value
    const quantity = document.getElementById("quantity").value
    const type = document.getElementById("selector").value
    var esopType = document.getElementById("esoptype").value
    var userName = document.getElementById("username").value

    console.log(price)
    console.log(quantity)
    console.log(type)
    var body = {
        price: parseInt(price),
        quantity: parseInt(quantity),
        type
    }

    if (type == "SELL") {
       body["esopType"] = esopType
    }   

    e.preventDefault()

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