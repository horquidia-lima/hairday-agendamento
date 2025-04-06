export function hoursClick(){
    const hours = document.querySelectorAll(".hour-unavailable")

    hours.forEach((avaible) => {
        avaible.addEventListener("click", (selected) => {
           
            //Remove a classe hour-selected de todas li nao selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            //Add li na classe clicada
            selected.target.classList.add("hour-selected")
        })
    })
}