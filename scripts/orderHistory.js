
const submitButton = document.getElementById("submit")

function createField(fieldName,value) {
    const field = document.createElement("p");
    const node = document.createTextNode(`${fieldName} : ${value}`)
    field.appendChild(node)
    field.classList.add("content")
    return field;
}
const createCard = (order) => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.appendChild(createField("orderId", order.orderId));
    card.appendChild(createField("type",order.type));
    card.appendChild(createField("quantity",order.quantity));
    card.appendChild(createField("price",order.price));
    card.appendChild(createField("status", order?.status))

    if(order.type == "SELL") {
        card.appendChild(createField("ESOP Type", order.esopType))
    }
    return card
}

submitButton.onclick = (e) => {
    var userName = document.getElementById("username").value

    fetch(`http://localhost:8080/user/${userName}/order`, {
        method: "GET"
    }).then(response => response.json().then(res => {
        console.log(res)
        
        var history = res;

        var orderField = document.getElementById("orders")
        orderField.innerHTML = ""
        for(let i=0;i<history.length;i++) {
            orderField.appendChild(createCard(history[i]))
        }

    }))

    e.preventDefault()

}
