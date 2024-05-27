import { queryProducts } from "../../secondary/dynamodb.mjs"

export const listProductsRepository = async (stage)=>{
    let response = await queryProducts(stage);
    return response;
}