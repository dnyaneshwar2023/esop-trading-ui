
const submitButton = document.getElementById("submit")


function submitForm(event) {
    event.preventDefault()

    console.log(event)
}

submitButton.onclick = (e) => {
    const price = document.getElementById("price").value
    const quantity = document.getElementById("quantity").value
    const type = document.getElementById("type").value

    console.log(price)
    console.log(quantity)
    console.log(type)
    
    e.preventDefault()
    
}