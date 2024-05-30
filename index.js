import { apigtwAdapter } from './primary/apigtw_event.js';
import { manualAdapter } from './primary/manual_event.js';
import { snsAdapter } from './primary/sqs_event.mjs';

  export const handler = async (event, context) => {
    let responseEvent = {};
    const stage = getStage(context);

    //imprimir el evento
    console.log("validateEvent::event",event);


    if(event["httpMethod"]){
      responseEvent = await apigtwAdapter(event, stage);
    }else if(event["isManualEvent"]){
      responseEvent = await manualAdapter(event, stage)
    }else if(event["Records"]){
      const records = event["Records"];
      if(records[0]["EventSource"] == "aws:sns"){
        responseEvent = await snsAdapter(records, stage)
      } else{
        responseEvent = "Evento no reconocido"
      }
    }
    else{
      responseEvent = "Evento no reconocido"
    }

    //Devolver el primer producto de la lista
    const response = {
      statusCode: 200,
      body: JSON.stringify(responseEvent)
    };
    return response;
  };

  function getStage(context){
    //Imprimir el context
    console.log("getStage:context", context);
  }