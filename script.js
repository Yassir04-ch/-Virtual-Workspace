
const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const clos = document.getElementById("close");
const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleselect");
const imgInput = document.getElementById("image");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("number");
const expInput = document.getElementById("Experiences");


addBtn.onclick =function affmodal(){
  modal.style.display = "inline-block"

};
clos.onclick =function affmodal(){
  modal.style.display = "none"

};

let employees = JSON.parse(localStorage.getItem("employees")) || [];

let conference = JSON.parse(localStorage.getItem("conference")) || [];
let reception = JSON.parse(localStorage.getItem("reception")) ||[];
let server =JSON.parse(localStorage.getItem("server")) || [];
let security =JSON.parse(localStorage.getItem("security")) || [];
let staff = JSON.parse(localStorage.getItem("staff")) ||[];
let archives =JSON.parse(localStorage.getItem("archives")) || [];


function ajuteremployé(){
    let employee = {
        name: nameInput.value,
        role: roleInput.value,
        img: imgInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        experience: expInput.value
    };

     if(employee.role === "Manager"){
          conference.push(employee) ;
          reception.push(employee);
          server.push(employee); 
          security.push(employee);
          staff.push(employee);
          archives.push(employee);
        } 
        if(employee.role === "sécurité"){
          security.push(employee)
        }
         if(employee.role === "Techniciens"){
          server.push(employee)
        } 
        if(employee.role === "Nettoyage"){
          reception.push(employee);
          conference.push(employee);
          server.push(employee);
          security.push(employee);
          staff.push(employee);
        }
         if(employee.role === "Réceptionniste"){
          reception.push(employee)
        } 

    employees.push(employee);
    document.querySelector("form").reset();

    localStorage.setItem("employees",JSON.stringify(employees));

    localStorage.setItem("conference",JSON.stringify(conference));
    localStorage.setItem("reception",JSON.stringify(reception));
    localStorage.setItem("server",JSON.stringify(server));
    localStorage.setItem("staff",JSON.stringify(staff));
    localStorage.setItem("archives",JSON.stringify(archives));
    localStorage.setItem("security",JSON.stringify(security));

    afficheremployé(); 
}
saveBtn.addEventListener("click",ajuteremployé)

const nListemp = document.getElementById("nListemp")


function afficheremployé(){
    nListemp.innerHTML = "";

    employees.forEach(p => {
      nListemp.innerHTML += `
        <div class="card" >
        <img class="imgcard" src="${p.img}">
        <p>${p.name}</p>
        <button>edit</button>
        </div>`;
        });
}
afficheremployé();
const btnconf = document.getElementById("btn-confernce")
const btnser = document.getElementById("btn-server")
const btnsecur = document.getElementById("btn-security")
const btnstaf = document.getElementById("btn-staf")
const btnarchiv = document.getElementById("btn-archive")
const btnrecep = document.getElementById("btn-reception")


// afficher les emploi en zones

function affichzone1(){
  const zoneStaff = document.querySelector(".zone1 .equipe");
  zoneStaff.innerHTML = "";

  conference.forEach(p => {
       zoneStaff.innerHTML +=`
        <div class="emple" >
        <img class="imgcard" src="${p.img}">
        <p>${p.name}</p>
        <button class="btn-rem">X</button>
        </div>`;
  });
};

function affichzone2(){
  const zoneStaff = document.querySelector(".zone2 .equipe");
  zoneStaff.innerHTML = "";

  server.forEach(p => {
      zoneStaff.innerHTML +=`
        <div class="emple" >
        <img class="imgcard" src="${p.img}">
        <p>${p.name}</p>
        <button class="btn-rem">X</button>
        </div>`;
  });
}

function affichzone3(){
  const zoneStaff = document.querySelector(".zone3 .equipe");
  zoneStaff.innerHTML = "";

  security.forEach(p => {
     
      zoneStaff.innerHTML +=`
        <div class="emple" >
        <img class="imgcard" src="${p.img}">
        <p>${p.name}</p>
        <button class="btn-rem">X</button>
        </div>`;
  });
}

function affichzone4(){
  const zoneStaff = document.querySelector(".zone4 .equipe");
  zoneStaff.innerHTML = "";

  reception.forEach(p => {
     
      zoneStaff.innerHTML +=`
        <div class="emple" >
        <img class="imgcard" src="${p.img}">
        <p>${p.name}</p>
        <button class="btn-rem">X</button>
        </div>`;
  });
}

function affichzone5(){
  const zoneStaff = document.querySelector(".zone5 .equipe");
  zoneStaff.innerHTML = "";

  staff.forEach(p => {
     
      zoneStaff.innerHTML +=`
        <div class="emple" >
        <img class="imgcard" src="${p.img}">
        <p>${p.name}</p>
        <button class="btn-rem">X</button>
        </div>`;
  });
}

function affichzone6(){
  const zoneStaff = document.querySelector(".zone6 .equipe");
  zoneStaff.innerHTML = "";

  archives.forEach(p => {
      
      zoneStaff.innerHTML +=`
        <div class="emple" >
        <img class="imgcard" src="${p.img}">
        <p>${p.name}</p>
        <button class="btn-rem">X</button>
        </div>`;
  });
}

btnconf.addEventListener("click",affichzone1);
btnser.addEventListener("click",affichzone2);
btnsecur.addEventListener("click",affichzone3)
btnrecep.addEventListener("click",affichzone4)
btnstaf.addEventListener("click",affichzone5)
btnsecur.addEventListener("click",affichzone3)
btnarchiv.addEventListener("click",affichzone6)
