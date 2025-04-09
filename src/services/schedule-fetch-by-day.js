import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({date}){
    try {
        //Faz a requisicao
        const response = await fetch(`${apiConfig.baseUrl}/shedules`)

        //Converte para JSON
        const data = await response.json()

        //Filtra o agendamento pelo dia selecionado
        const dailyShedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
        )

        return dailyShedules

    } catch (error) {
        console.log(error)
        alert("Nao foi possivel carregar os agendamentos do dia")
    }
}