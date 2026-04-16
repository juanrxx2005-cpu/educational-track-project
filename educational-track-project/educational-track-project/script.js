function mostrar(seccion){
  document.querySelectorAll(".contenido").forEach(sec=>{
    sec.style.display = "none";
  });
  document.getElementById(seccion).style.display = "block";
}

var proyectos = [];
var ideas = [];

function login(){
  let correo = document.getElementById("correo").value;
  let rol = document.getElementById("rol").value;

  if(!correo.includes("@")){
    alert("El correo debe contener @");
    return;
  }

  if(rol === ""){
    alert("Debe seleccionar un rol");
    return;
  }

  alert("Bienvenido como " + rol);

  document.getElementById("login").style.display = "none";
  document.getElementById("panel").style.display = "block";
}

function mostrarSistema(sec){
  ["crear","verProyectos","agregarIdea","verIdeas"].forEach(s=>{
    document.getElementById(s).style.display = "none";
  });

  document.getElementById(sec).style.display = "block";

  if(sec === "verProyectos") renderProyectos();
  if(sec === "verIdeas") renderIdeas();
}

// PROYECTOS
function guardarProyecto(){
  let nombre = document.getElementById("nombreProyecto");
  let desc = document.getElementById("descProyecto");

  if(nombre.value && desc.value){
    proyectos.push({nombre: nombre.value, desc: desc.value});
    nombre.value = "";
    desc.value = "";
  }
}

function renderProyectos(){
  let lista = document.getElementById("listaProyectos");
  lista.innerHTML = "";

  proyectos.forEach((p, i)=>{
    lista.innerHTML += `<li onclick="verProyecto(${i})">${p.nombre}</li>`;
  });
}

function verProyecto(i){
  document.getElementById("detalleProyecto").innerHTML =
    `<strong>Descripción:</strong><br>${proyectos[i].desc}`;
}

// IDEAS
function guardarIdea(){
  let nombre = document.getElementById("nombreIdea");
  let desc = document.getElementById("descIdea");

  if(nombre.value && desc.value){
    ideas.push({nombre: nombre.value, desc: desc.value});
    nombre.value = "";
    desc.value = "";
  }
}

function renderIdeas(){
  let lista = document.getElementById("listaIdeas");
  lista.innerHTML = "";

  ideas.forEach((i, index)=>{
    lista.innerHTML += `<li onclick="verIdea(${index})">${i.nombre}</li>`;
  });
}

function verIdea(i){
  document.getElementById("detalleIdea").innerHTML =
    `<strong>Descripción:</strong><br>${ideas[i].desc}`;
}