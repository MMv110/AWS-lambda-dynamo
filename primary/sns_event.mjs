import {getProductSQSUC } from '../domain/use_cases/uc_get_product_sqs.mjs'

export const snsAdapter = async(records, stage) => {
    let response = {}

    console.log("snsAdapter::records", records)

    for(let record in records){
        console.log("snsAdapter::record", record)
        console.log("snsAdapter::SNSProduct", JSON.stringify(record["sns"]))

    }
    response = await getProductSQSUC(stage)

    return response
}