import { getProduct } from "/domain/use_cases/uc_get_product.mjs"

export const productRepository = async (idProduct, stage)=>{
    let response = await getProduct(stage, idProduct);
    return response;
}