const placeOrder = (body, userName) => {
    return fetch(`http://localhost:8080/user/${userName}/order`, {
        method: "POST",
        body: JSON.stringify({ ...body }),
        headers: {
            "Content-type": "application/json",
        },
    }).then((response) =>
        response.json().then((res) => {
            return res;
        })
    );
};

export default placeOrder;