import { sendMessageProducts } from "../../secondary/sqs.mjs"
import { publish } from "../../secondary/sns.mjs"

export const addProductRepository = async (product, stage) => {
    let response = {}

    response = await sendMessageProducts(product, stage)
    const responseSNS = await publish("Mensaje enviado a SQS", stage)
    console.log("addProductRepository::responseSNS", responseSNS);

    return responseSNS
}