import dayjs from "dayjs";
import {sheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector(".form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e define a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async(event) => {
    event.preventDefault();

    try {
        //Recuperar nome do cliente
        const name = clientName.value.trim()

        if(!name){
            return alert("Por favor, informe o nome do cliente")
        }

        //Recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            return alert("Por favor, selecione um horário")
        }

        //Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //Gera um id
        const id = new Date().getDate()

        await sheduleNew({
            id,
            name,
            when,
        })
        
    } catch (error) {
        alert("Não foi possível criar o agendamento")
        console.log(error)
    }
};