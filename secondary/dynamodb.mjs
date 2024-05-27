import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const queryProducts = async (stage) => {
    const command = new QueryCommand({
        TableName: "dev" + "-my-first-table",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
            ":pk": "PRODUCT"
        },
        ConsistentRead: true,
    })

    const response = await docClient.send(command)
    console.log("queryProducts:", response)
    return response
}

export const getProduct = async (stage, idProducto) => {
    const command = new QueryCommand({
        TableName: "dev" + "-my-first-table",
        KeyConditionExpression: "pk = :pk AND sk = :sk",
        ExpressionAttributeValues: {
            ":pk": "PRODUCT",
            ":sk": idProducto
        },
        ConsistentRead: true,
    })

    const response = await docClient.send(command)
    console.log("queryProduct: ", response)
    return response
}