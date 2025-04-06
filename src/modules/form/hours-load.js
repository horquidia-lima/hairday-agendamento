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

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }
        hours.append(li)
    })

    //Add evento de click nos horarios disponiveis
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}