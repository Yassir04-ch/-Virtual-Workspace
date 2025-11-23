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
const addExpBtn = document.getElementById("addExpBtn");
const formex = document.getElementById("formex")

// imagr de form ajoute 
const imgemploiyee = document.getElementById("imgemploiyee")

imgInput.addEventListener("input",function(){
  imgemploiyee.src = `${imgInput.value}`
  
})

addBtn.addEventListener("click",function affmodal() {
  modal.style.display = "inline-block";
});

clos.addEventListener("click",function closemodal() {
  modal.style.display = "none";
  document.querySelector("form").reset();
  imgemploiyee.src = " "
});

// add exepriances
addExpBtn.addEventListener("click",function(){
  formex.innerHTML +=`
            <input type="text" placeholder="exepriance">
            <label for="datdebu">date-debut</label>
            <input id="datdebu" type="date">
            <label for="datfin">date-fin</label>
            <input id="datfin" type="date">` ;

})


let employees = JSON.parse(localStorage.getItem("employees")) || [];
let conference = JSON.parse(localStorage.getItem("conference")) || [];
let reception = JSON.parse(localStorage.getItem("reception")) || [];
let server = JSON.parse(localStorage.getItem("server")) || [];
let security = JSON.parse(localStorage.getItem("security")) || [];
let staff = JSON.parse(localStorage.getItem("staff")) || [];
let archives = JSON.parse(localStorage.getItem("archives")) || [];

// rejex form validation 
function validateForm() {
   
  if (nameInput.value.trim() === "") {
    alert("enter  employees nome.");
    nameInput.style.border = "2px solid red"
    return false;
  }


  if (imgInput.value.trim() === "") {
    alert(" enter image URL.");
    imgInput.style.border = "2px solid red"
    return false;
  }

  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailInput.value && !emailRegex.test(emailInput.value)) {
    alert("enter valid email address.");
    emailInput.style.border = "2px solid red"
     return false;
  }


if (phoneInput.value.trim() === "" || !/^\d{10}$/.test(phoneInput.value)) {
    alert("enter a valid 10 phone number.");
    phoneInput.style.border = "2px solid red"
    return false;
  }


  if (expInput.value.trim() === "") {
    alert("Please enter the employee's experiences.");
    expInput.style.border = "2px solid red"

    return false;
  }

  return true;
}

const exepriances = document.getElementById("exepriances");
exepriances.addEventListener("click",function(e){
  
})

function ajuteremployé() {
  if (!validateForm()) {
    return;
  }

  let employee = {
    name: nameInput.value,
    role: roleInput.value,
    img: imgInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    experience: expInput.value
  };

   
  if (employee.role === "Manager") {
    conference.push(employee);
    reception.push(employee);
    server.push(employee);
    security.push(employee);
    staff.push(employee);
    archives.push(employee);
  }
  if (employee.role === "sécurité") {
    security.push(employee);
  }
  if (employee.role === "Techniciens") {
    server.push(employee);
  }
  if (employee.role === "Nettoyage") {
    reception.push(employee);
    conference.push(employee);
    server.push(employee);
    security.push(employee);
    staff.push(employee);
  }
  if (employee.role === "Réceptionniste") {
    reception.push(employee);
  }

  employees.push(employee);
  document.querySelector("form").reset();  

  imgemploiyee.src = " "


  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("conference", JSON.stringify(conference));
  localStorage.setItem("reception", JSON.stringify(reception));
  localStorage.setItem("server", JSON.stringify(server));
  localStorage.setItem("staff", JSON.stringify(staff));
  localStorage.setItem("archives", JSON.stringify(archives));
  localStorage.setItem("security", JSON.stringify(security));

  afficheremployé();
}


saveBtn.addEventListener("click", ajuteremployé);

const nListemp = document.getElementById("nListemp");

// afficher emploiyee dans aside 
function afficheremployé() {
  nListemp.innerHTML = "";

  employees.forEach((p, index) => {
    nListemp.innerHTML += `
      <div class="card">
        <img data-index="${index}" class="imgcard imgpro" src="${p.img}" />
        <div>
          <p>${p.name}</p>
          <p>Role: ${p.role}</p>
        </div>
        <button class="edit">edit</button>
      </div>`;
      afichprofil();
  });
}


// afficher profile de emploiyee
function afichprofil(){
    const imgb = document.querySelectorAll(".imgpro");
    imgb.forEach(img => {
      img.addEventListener("click", function () {
        const idx = this.dataset.index;
        const profile = document.getElementById("profile");
        profile.style.display = "block";
        profile.innerHTML = `
          <div class="card-profil">
            <h3>Profile</h3>
            <img class="imgprofil" src="${employees[idx].img}" />
            <p>Nome: ${employees[idx].name}</p>
            <p>Role: ${employees[idx].role}</p>
            <p>Email: ${employees[idx].email}</p>
            <p>Phone: ${employees[idx].phone}</p>
            <p>Experience: ${employees[idx].experience}</p>
            <button class="btnclose">close</button>
          </div>`;

        const btncls = document.querySelectorAll(".btnclose");
        btncls.forEach((button) => {
          button.addEventListener("click", function () {
            profile.style.display = "none";
          });
        });
      });
    });
}


afficheremployé();


const select = document.getElementById("selectlist")
function filteremploiyee(){
  if(select.value === "Tout les emploiyees"){
    afficheremployé();
  }
  else{
    let listfilter = employees.filter(fil => fil.role === select.value)
    nListemp.innerHTML = "";

  listfilter.forEach((emp, index) => {
    nListemp.innerHTML += `
      <div class="card">
        <img data-index="${index}" class="imgcard imgpro" src="${emp.img}" />
        <div>
          <p>${emp.name}</p>
          <p>Role: ${emp.role}</p>
        </div>
        <button class="edit">edit</button>
      </div>`;
  });
  }
    afichprofil();

};
select.addEventListener("change",filteremploiyee)


const btnconf = document.getElementById("btn-confernce")
const btnser = document.getElementById("btn-server")
const btnsecur = document.getElementById("btn-security")
const btnstaf = document.getElementById("btn-staf")
const btnarchiv = document.getElementById("btn-archive")
const btnrecep = document.getElementById("btn-reception")



// afficher les emploi en zones
const employezone = document.getElementById("employezone");
const employezoneee = document.getElementById("employezoneee");
const btnclosmodale = document.getElementById("closmodale-emploi")

btnclosmodale.addEventListener("click",function(){
  employezone.style.display = "none";

})

function affichzone(ctx, zon) {
  if (zon.length <= 0) {
    alert("aucune employée");
    return;
  } 


  employezone.style.display = "block";
  employezoneee.innerHTML = "";

 
  zon.forEach((p, index) => {
    employezoneee.innerHTML += `
      <div class="card-employezone">
        <img class="imgcard" src="${p.img}">
        <div>
          <p>${p.name}</p>
          <p>Role: ${p.role}</p>
        </div>
        <button data-index="${index}" class="btn-addzone">add</button>
      </div>`;
  });
 
  document.querySelectorAll(".btn-addzone").forEach((btn) => {
    btn.addEventListener("click", function () {
      const idx = this.dataset.index;
      const employee = zon[idx];
      const zondiv = ctx.closest(`[data-zone]`);
      const equipeContainer = zondiv.querySelector(".equipe");


      equipeContainer.innerHTML += `
        <div class="card-employezone" style="width:fit-content;">
          <img class="imgcard" src="${employee.img}">
          <div>
            <p>${employee.name}</p>
            <p>Role: ${employee.role}</p>
          </div>
          <button class="btn-remzone">X</button>
        </div>`;


       zon.splice(idx, 1);
       employees.splice(idx,1)
    
        afficheremployé(); 


      removeinArray(employees, employee);
      removeinArray(conference, employee);
      removeinArray(reception, employee);
      removeinArray(server, employee);
      removeinArray(staff, employee);
      removeinArray(archives, employee);
      removeinArray(security, employee);

      employezone.style.display = "none";


      localStorage.setItem("employees", JSON.stringify(employees));
      localStorage.setItem("conference", JSON.stringify(conference));
      localStorage.setItem("reception", JSON.stringify(reception));
      localStorage.setItem("server", JSON.stringify(server));
      localStorage.setItem("staff", JSON.stringify(staff));
      localStorage.setItem("archives", JSON.stringify(archives));
      localStorage.setItem("security", JSON.stringify(security));


      if (equipeContainer.children.length > 0) {
        zondiv.style.background = "rgba(13, 142, 13, 0)";
      }


      equipeContainer.querySelectorAll(".btn-remzone").forEach((rmBtn) => {
        rmBtn.addEventListener("click", function () {
          this.parentElement.remove();

 // virification du les zone 
if (!employees.some(e => e.name === employee.name && e.img === employee.img)) { 
  employees.push(employee);
}

// verifier Security
 if (employee.role === "security") {
  if (!security.some(e => e.name === employee.name && e.img === employee.img)) {
    security.push(employee);
  }
}
// verifier reception
else if (employee.role === "Réceptionniste") {
  if (!reception.some(e => e.name === employee.name && e.img === employee.img)) {
    reception.push(employee);
  }
}
// virifier nettoyege
else if (employee.role === "Nettoyage") {
  if (!conference.some(e => e.name === employee.name && e.img === employee.img)) conference.push(employee);
  if (!reception.some(e => e.name === employee.name && e.img === employee.img)) reception.push(employee);
  if (!server.some(e => e.name === employee.name && e.img === employee.img)) server.push(employee);
  if (!staff.some(e => e.name === employee.name && e.img === employee.img)) staff.push(employee);
  if (!security.some(e => e.name === employee.name && e.img === employee.img)) security.push(employee);
}
else {
  if (!conference.some(e => e.name === employee.name && e.img === employee.img)) conference.push(employee);
  if (!reception.some(e => e.name === employee.name && e.img === employee.img)) reception.push(employee);
  if (!server.some(e => e.name === employee.name && e.img === employee.img)) server.push(employee);
  if (!staff.some(e => e.name === employee.name && e.img === employee.img)) staff.push(employee);
  if (!archives.some(e => e.name === employee.name && e.img === employee.img)) archives.push(employee);
  if (!security.some(e => e.name === employee.name && e.img === employee.img)) security.push(employee);
}
          localStorage.setItem("employees", JSON.stringify(employees));
          localStorage.setItem("conference", JSON.stringify(conference));
          localStorage.setItem("reception", JSON.stringify(reception));
          localStorage.setItem("server", JSON.stringify(server));
          localStorage.setItem("staff", JSON.stringify(staff));
          localStorage.setItem("archives", JSON.stringify(archives));
          localStorage.setItem("security", JSON.stringify(security));

 
          if (equipeContainer.children.length <= 0) {
            zondiv.style.background = "rgba(255,0,0,0.3)";
          }

          afficheremployé(); 
        });
      });
    });
  });
}
// function pour remove in arry 
function removeinArray(arr, empl) {
  const i = arr.findIndex(e => e.name === empl.name && e.img === empl.img);
  if (i > -1) arr.splice(i, 1);
}

afficheremployé(); 

btnconf.addEventListener("click", function() {
  affichzone(this, conference);
});

btnser.addEventListener("click", function() {
  affichzone(this, server);
});

btnsecur.addEventListener("click", function() {
  affichzone(this, security);
});

btnrecep.addEventListener("click", function() {
  affichzone(this, reception);
});

btnstaf.addEventListener("click", function() {
  affichzone(this, staff);
});

btnarchiv.addEventListener("click", function() {
  affichzone(this, archives);
});
localStorage.clear();