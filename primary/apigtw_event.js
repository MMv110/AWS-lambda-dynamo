import {listarProductos} from '../domain/use_cases/uc_list_products.mjs'
import { getProducto } from '../domain/use_cases/uc_get_product.mjs'

export const apigtwAdapter = async(event, stage) =>{
    
    if(event["httpMethod"] == "GET"){ 

            return await listarProductos(stage);
    }else if(event["httpMethod"] == "POST"){ //todo identificar el otro caso
        
    }
}