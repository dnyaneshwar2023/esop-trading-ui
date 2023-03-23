import { baseURL } from "../CONSTANTS";

const placeOrder = (body, userName) => {
    console.log(baseURL)
    return fetch(`${baseURL}/user/${userName}/order`, {
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