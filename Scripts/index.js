const mainMenu=document.querySelector(".mainMenu");
const closeMenu=document.querySelector(".closeMenu");
const openMenu=document.querySelector(".openMenu");


openMenu.addEventListener("click",show);
closeMenu.addEventListener("click",close);


function show(){
    mainMenu.style.display="flex";
    mainMenu.style.top="0";

}

function close(){
    mainMenu.style.top="-100%";
    
}


// GitHubCalendar(".calendar", "CharithGR");
  // or enable responsive functionality:
  GitHubCalendar(".calendar", "CharithGR", { responsive: true });

  // Use a proxy
//   GitHubCalendar(".calendar", "CharithGR", {
//      proxy (username) {
//        return fetch(`https://your-proxy.com/github?user=${username}`)
//      }
//   }).then(r => r.text())