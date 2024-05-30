import { getProductSQSUC } from "../domain/use_cases/uc_get_product_sqs.mjs"

export const snsAdapter = async (records, stage) => {
    let response = {}

    console.log("manualAdapter::manualEvent", manualEvent)

    if(manualEvent["type"] ==  "getSQSMessage"){
        response = await getProductSQSUC(stage)
    }

    return response
}