import {getProductSQSUC } from '../domain/use_cases/uc_get_product_sqs.mjs'

export const snsAdapter = async(records, stage) => {
    let response = {}

    console.log("manualAdapter::manuelEvent", manualEvent)

    if(manuelEvent["type"] == "getSQSMessage") {
        response = await getProductSQSUC(stage)
    }
    return response
}