import {apigtwAdapter} from './primary/apigtw_event.js';

  export const handler = async (event, context) => {
    let responseEvent = {};
    const stage = getStage(context);

    //imprimir el evento
    console.log("validateEvent::event",event);
    if(event["httpMethod"]){
      responseEvent = await apigtwAdapter(event, stage);
    }
    else{
      responseEvent = "Evento no reconocido" + stage
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