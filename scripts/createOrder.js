
const submitButton = document.getElementById("submit")


function submitForm(event) {
    event.preventDefault()

    console.log(event)
}

submitButton.onclick = (e) => {
    const price = document.getElementById("price").value
    const quantity = document.getElementById("quantity").value
    const type = document.getElementById("type").value
    var esopType = document.getElementById("esoptype").value

    console.log(price)
    console.log(quantity)
    console.log(type)
    var body = {
        price,
        quantity,
        type,
    }

    if (type == "SELL") {
       body["esopType"] = esopType
    }   

    fetch("http://localhost:8080/user/amaan/order", {
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
    const currentType = document.getElementById("type").value
    console.log("toggle")
    if (currentType == "BUY") {
        document.getElementById("esopsection").classList.add("hidden")
    }
    else {
        document.getElementById("esopsection").classList.remove("hidden")
    }
}