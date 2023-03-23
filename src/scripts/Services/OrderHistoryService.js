const getOrderHistory = (userName) => {
    return fetch(`http://localhost:8080/user/${userName}/order`, {
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
