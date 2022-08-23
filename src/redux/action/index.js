//for Add Items to Cart

export const addCart =(product) => {
    return{
        type: "ADDITEM",
        payload : product
    }
}

//for Delete to Cart

export const deleteCart =(product) => {
    return{
        type: "DELITEM",
        payload : product
    }
}