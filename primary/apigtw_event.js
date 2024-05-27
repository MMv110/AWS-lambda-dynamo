import {listarProductos} from '../domain/use_cases/uc_list_products.mjs'
import { getProducto } from '../domain/use_cases/uc_get_product.mjs'

export const apigtwAdapter = async(event, stage) =>{
    if(event["httpMethod"] ="GET"){ //todo identificar el otro caso
        //if(typeof event.queryStringParameters['id'] === 'null')
            return await listarProductos(stage);
        //return getProducto(event.queryStringParameters['id'], stage);
    }else if(event["httpMethod"] = "POST"){ //todo identificar el otro caso
        
    }
}