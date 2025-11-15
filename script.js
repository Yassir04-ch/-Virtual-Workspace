
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
        const li = document.createElement("li");
        li.textContent = p.name + " ";

        const btn = document.createElement("button");
        btn.textContent = "Profile";
        btn.onclick = function() {
            alert(
                `Nom: ${p.name}\nRole: ${p.role}\nEmail: ${p.email}\nTéléphone: ${p.phone}\nExperience: ${p.experience}`
            );
        };
        li.appendChild(btn);
        nListemp.appendChild(li);
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

btnconf.addEventListener("click", function(){
  const zoneStaff = document.querySelector(".zone[data-zone='conference'] .zoneStaff");
  zoneStaff.innerHTML = "";

  conference.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.name;
      zoneStaff.appendChild(li);
  });
});
btnrecep.addEventListener("click", function(){
  const zoneStaff = document.querySelector(".zone[data-zone='reception'] .zoneStaff");
  zoneStaff.innerHTML = "";

  reception.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.name;
      zoneStaff.appendChild(li);
  });
});
btnser.addEventListener("click", function(){
  const zoneStaff = document.querySelector(".zone[data-zone='server'] .zoneStaff");
  zoneStaff.innerHTML = "";

  server.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.name;
      zoneStaff.appendChild(li);
  });
});
btnsecur.addEventListener("click", function(){
  const zoneStaff = document.querySelector(".zone[data-zone='Security'] .zoneStaff");
  zoneStaff.innerHTML = "";

  security.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.name;
      zoneStaff.appendChild(li);
  });
});
btnstaf.addEventListener("click", function(){
  const zoneStaff = document.querySelector(".zone[data-zone='Staff'] .zoneStaff");
  zoneStaff.innerHTML = "";

  staff.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.name;
      zoneStaff.appendChild(li);
  });
});
 btnarchiv.addEventListener("click", function(){
  const zoneStaff = document.querySelector(".zone[data-zone='archive'] .zoneStaff");
  zoneStaff.innerHTML = "";

  archives.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.name;
      zoneStaff.appendChild(li);
  });
});


 