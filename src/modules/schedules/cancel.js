const periods = document.querySelectorAll(".period")

//Gera evento de click para cada lista (manha, tarde e noite)

periods.forEach((period) => {
    period.addEventListener("click", (event) => {
       if(event.target.classList.contains("cancel-icon")){
        //Obtem a li pai do elemento clicado
        const item = event.target.closest("li")
        const {id} = item.dataset

        if(id){
            const isConfirm = confirm("Deseja realmente cancelar esse agendamento?")
        }
       }
    })
})