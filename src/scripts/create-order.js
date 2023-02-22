import "../css/index.css"

import '../css/create-order.css'

const submitButton = document.getElementById("submit")

submitButton.onclick = (e) => {
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

    fetch(`http://localhost:8080/user/${userName}/order`, {
        method: "POST",
        body: JSON.stringify({...body}),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json().then(res => {
        console.log(res)
        
        if(response.status == 400) {
            return alert("Invalid Request")
        }
        if(res.errors == undefined) {
            alert("Order Placed Successfully")
        }
        else
        {
            alert(res.errors)
        }
    }))

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