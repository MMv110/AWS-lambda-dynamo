import { getProductsMock } from "../../secondary/mock.mjs"

export const getProducto = async (idProduct, stage)=>{
    let response = getProductsMock(idProduct, stage);
    return response;
}