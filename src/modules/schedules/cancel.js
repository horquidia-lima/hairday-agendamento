import {schedulesDay} from "./load.js"
import {scheduleCancel} from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//Gera evento de click para cada lista (manha, tarde e noite)

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
       if(event.target.classList.contains("cancel-icon")){
        console.log("ID do agendamento clicado:", id);
        //Obtem a li pai do elemento clicado
        const item = event.target.closest("li")

        //Pega o id do agendamento para remover
        const {id} = item.dataset

        //Confirma que o id foi selecionado
        if(id){
            //Confirma se o usuario quer cancelar
            const isConfirm = confirm(
                "Deseja realmente cancelar esse agendamento?"
            )

            if(isConfirm){
                //Faz a requisicao na API para cancelar
                await scheduleCancel({id})

                //Recarregamos os agendamentos
                schedulesDay()
            }
        }
       }
    })
})