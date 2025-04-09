import { apiConfig } from "./api-config.js";

export async function sheduleNew({id, name, when}){
    try {
        //Faz a requisicao para enviar os dados do agendamento
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when}),
        })

        alert("Agendamento criado com sucesso")
    } catch (error) {
        console.log(error)
        alert("Não foi possível criar o agendamento")
    }
}