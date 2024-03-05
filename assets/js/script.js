let radio = [
    {   paciente: "Francisca Rojas",rut: "9878782-1",prevision: "Fonasa",
        especialista:"Ignacio Schulz",hora: "11:00"},
    {   paciente: "Pamela Estrada",rut: "15345241-3",prevision: "Isapre",
        especialista:"Federico Subercaseaux",hora: "11:30"},
    {   paciente: "Armando Luna",rut: "16445345-9",prevision: "Isapre",
        especialista:"Fernando Wurthz",hora: "15:00"},
    {   paciente: "Manuel Godoy",rut:"17666419-0",prevision: "Fonasa",
        especialista: "Ana María Godoy",hora:"15:30"},
    {   paciente: "Ramón Ulloa",rut: "14989389-k",prevision:"Fonasa",
        especialista: "Patricia Suazo",hora: "16:00"}
]

let trauma = [
    {   paciente: "Paula Sanchez",rut: "15554774-5",prevision: "Fonasa",
        especialista:"María Paz Ultuzarra",hora: "8:00" },
    {   paciente: "Angélica Navas",rut: "15444147-9",prevision: "Isapre",
        especialista:"Raul Araya",hora: "10:00" },
    {   paciente: "Ana Klapp",rut: "17879423-9",prevision: "Isapre",
        especialista:"María Arriagada",hora: "10:30" },
    {   paciente: "Felipe Mardones",rut: "1547423-6",prevision: "Isapre",
        especialista:"Alejandro Badilla",hora: "11:00" },
    {   paciente: "Diego Marre",rut: "16554741-k",prevision: "Fonasa",
        especialista:"Cecilia Budnik",hora: "11:30" },
    {   paciente: "Cecilia Mendez",rut: "9747535-8",prevision: "Isapre",
        especialista:"Arturo Cavagnaro",hora: "12:00" },
    {   paciente: "Marcial Suazo",rut: "11254785-5",prevision: "Isapre",
        especialista:"Andrés Kanacri",hora: "12:30" }
]

let dental = [
    {   paciente: "Marcelo Retamal",rut: "11123425-6",prevision: "Isapre",
        especialista:"Andrea Zuñiga",hora: "8:30"},
    {   paciente: "Angel Muñoz",rut: "9878789-2",prevision: "Isapre",
        especialista:"María Pía Zañartu",hora: "11:00"},
    {   paciente: "Mario Kast",rut: "7998789-5",prevision: "Fonasa",
        especialista:"Scarlett Witting",hora: "11:30"},
    {   paciente: "Karin Fernandez",rut: "18887662-k",prevision: "Fonasa",
        especialista:"Francisco Von Teuber",hora: "13:00"},
    {   paciente: "Hugo Sanchez",rut: "17665461-4",prevision: "Fonasa",
        especialista:"Eduardo Viñuela",hora: "13:30"},
    {   paciente: "Ana Sepúlveda",rut: "14441281-0",prevision: "Isapre",
        especialista:"Raquel Villaseca",hora: "14:00"}
    
]


// imprimir primera y ulitma atencion de paciente radiologia

// imprimir primera y ulitma atencion de paciente radiologia

// imprimir primera y ulitma atencion de paciente Dental


let btnRad=document.getElementById("pacientes-radio");
btnRad.addEventListener("click", function(){
    
    document.querySelector("#titulo-esp").innerHTML="Radiología";
    document.getElementById("paciente-informe").innerHTML="Primera atención: "+ radio[0].paciente + " - " + radio[0].prevision + 
    " | " + "Última atención: " + radio[4].paciente + " - " + radio[4].prevision;
    
    document.querySelector("#tbl-paciente-dental").innerHTML="";
    document.querySelector("#tbl-paciente-rad").innerHTML = "";
    document.querySelector("#tbl-paciente-trauma").innerHTML="";
    
    for (let i =0; i<=radio.length; i++){
        document.querySelector("#tbl-paciente-rad").innerHTML += "<tr>" + "<td>" + radio[i].paciente + "</td>" 
        + "<td>" + radio[i].rut + "</td>" + "<td>" + radio[i].prevision + "</td>" + "<td>" + radio[i].especialista + "</td>"
        + "<td>" + radio[i].hora + "</td>"+ "</tr>";
    }

    
    
})


let btnTrauma=document.getElementById("pacientes-trauma");
btnTrauma.addEventListener("click", function(){
    document.querySelector("#tbl-paciente-dental").innerHTML="";
    document.querySelector("#tbl-paciente-trauma").innerHTML="";
    document.querySelector("#tbl-paciente-rad").innerHTML = "";
    for (let i =0; i<=radio.length; i++){
        document.querySelector("#tbl-paciente-trauma").innerHTML += "<tr>" + "<td>" + trauma[i].paciente + "</td>" 
        + "<td>" + trauma[i].rut + "</td>" + "<td>" + trauma[i].prevision + "</td>" + "<td>" + trauma[i].especialista + "</td>"
        + "<td>" + trauma[i].hora + "</td>"+ "</tr>";
    }
    document.getElementById("titulo-esp").innerHTML="Traumatología";
    document.getElementById("paciente-informe").innerHTML="Primera atención: "+ trauma[0].paciente + " - " + trauma[0].prevision + 
    " | " + "Última atención: " + trauma[5].paciente + " - " + trauma[5].prevision;
});

let btnDental=document.getElementById("pacientes-dental");

btnDental.addEventListener("click", function(){
    document.querySelector("#tbl-paciente-dental").innerHTML="";
    document.querySelector("#tbl-paciente-trauma").innerHTML="";
    document.querySelector("#tbl-paciente-rad").innerHTML = "";
    for (let i =0; i<=radio.length; i++){
        document.querySelector("#tbl-paciente-dental").innerHTML += "<tr>" + "<td>" + dental[i].paciente + "</td>" 
        + "<td>" + dental[i].rut + "</td>" + "<td>" + dental[i].prevision + "</td>" + "<td>" + dental[i].especialista + "</td>"
        + "<td>" + dental[i].hora + "</td>"+ "</tr>";
    }

    document.getElementById("titulo-esp").innerHTML="Dental";
    document.getElementById("paciente-informe").innerHTML="Primera atención: "+ dental[0].paciente + " - " + dental[0].prevision + 
    " | " + "Última atención: " + dental[5].paciente + " - " + dental[5].prevision;

})




