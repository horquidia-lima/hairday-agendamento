import dayjs from "dayjs";

//Seleciona as sessoes manha, tarde e noite

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({dailyShedules}){
    try {
        //Limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //Renderiza os agendamentos por periodo
        dailyShedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            //Add o id de agendamento
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            //Cria o icone de cancelamento
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            //Add o tempo, nome e icone de cancelamento ao item
            item.append(time, name, cancelIcon)

            //Obtem somente a hora
            const hour = dayjs(schedule.when).hour() 

            //Redenrizar o agendamento por periodo (manha, tarde e noite
            if(hour <= 12){
                periodMorning.appendChild(item)
            }else if (hour > 12 && hour <= 18){
                periodAfternoon.appendChild(item)
            }else {
                periodNight.appendChild(item)
            }
        });
        
    } catch (error) {
        alert("Nao foi possivel carregar os agendamentos do dia")
        console.log(error)
    }
}