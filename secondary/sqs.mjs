import { PublishCommand } from '@aws-sdk/client-sns'

export const publish = async(message, stage) => {
    const publishCommand = new PublishCommand({
        Message: message,
        TopicArn: snsTopicArn[stage]
    })

    const response = await snsClient.send(publishCommand)

    console.log("snsAdapter::publish", response)

    if(response.$metadada.httpStatus === 200){
        return {
            code: 200,
            message: "OK"
        }
    }

    return {
        code: response.$metadada.httpStatus,
        message: "ERROR"
    }
}