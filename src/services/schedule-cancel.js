import {apiConfig} from "./api-config.js";

export async function scheduleCancel(){
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}}`, {
            method: "DELETE",
        })
        
        alert("Agendamento cancelado com sucesso")
    } catch (error) {
        console.log(error)
        alert("Nao foi possivel cancelar o agendamento")
    }
}