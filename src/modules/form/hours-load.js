import dayjs from "dayjs"
import {openingHours} from "../../utils/opening.hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}){
    const opening = openingHours.map((hour) => {
       //Recupera somente a hora
       const [scheduleHour] = hour.split(":")

       //Adciona a hora na data e verifica se esta no passado
       const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

       return {
        hour,
        avaible: isHourPast,
       }
    })

    //Renderiza as horas disponiveis
    opening.forEach(({hour, avaible}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(avaible ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        hours.append(li)
    })
}