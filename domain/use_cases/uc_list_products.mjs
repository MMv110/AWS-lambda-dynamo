import {listProductsRepository} from '../repositories/list_products.mjs'

export const listarProductos = async (stage)=>{
    return await listProductsRepository(stage)
}