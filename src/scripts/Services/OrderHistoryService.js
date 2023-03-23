import { baseURL } from "../CONSTANTS";

const getOrderHistory = (userName) => {
    return fetch(`${baseURL}/user/${userName}/order`, {
        method: "GET",
    })
        .then((response) =>
            response.json().then((res) => {
                return res;
            })
        )
        .catch((err) => {
            return [];
        });
};

export default getOrderHistory;
