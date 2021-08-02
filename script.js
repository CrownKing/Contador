const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const anoNovo = '1 Jan 2022';


function contador(){
    const diaHoje = new Date()
    const anoNovoData = new Date(anoNovo)
    const diff = new Date(anoNovoData- diaHoje) /1000;
    const dias = Math.floor(diff/3600/24)
    const horas = Math.floor(diff/3600)%24
    const minutos = Math.floor(diff/60)% 60
    const segundos = Math.floor(diff % 60)

    diasEl.innerHTML=dias
    horasEl.innerHTML=formatTempo(horas)
    minutosEl.innerHTML=formatTempo(minutos)
    segundosEl.innerHTML=formatTempo(segundos)
}

function formatTempo(time){
return time < 10 ? `0${time}`: time;
}

setInterval(contador,1000)//chamar contador a cada segundo