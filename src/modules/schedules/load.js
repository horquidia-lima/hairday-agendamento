import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import {hoursLoad} from "../form/hours-load.js"
import { SchedulesShow } from "./show.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay(){
    //Obtem a data do input
    const date = selectedDate.value

    //Busca na API os agendamentos
    const dailyShedules = await scheduleFetchByDay({date})

    //Exibe os agendamentos
    SchedulesShow({dailyShedules})

    //Renderiza as horas disponiveis
    hoursLoad({date})
    
}