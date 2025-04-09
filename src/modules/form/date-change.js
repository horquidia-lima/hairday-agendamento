import {schedulesDay} from "../schedules/load.js"

//Seleciona o input da data
const selectedDate = document.getElementById("date");

//Renderiza as horas disponiveis ao mudar a data
selectedDate.onchange = () => schedulesDay()