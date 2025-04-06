import dayjs from "dayjs"
import {openingHours} from "../../utils/opening.hours.js"

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
}