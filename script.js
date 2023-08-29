let hamburgerIcon = document.querySelector(".hamburger-icon");
let heading = document.querySelector(".heading");
let sideBar = document.querySelector('.sidebar');

let hamburgerLine1 = document.querySelector('.horizontal-line-1');
let hamburgerLine2 = document.querySelector('.horizontal-line-2');
let hamburgerLine3 = document.querySelector('.horizontal-line-3');


let aDropDown1 = document.querySelector('.a-drop-down1');
let aDropDown2 = document.querySelector('.a-drop-down2');
let aDropDown3 = document.querySelector('.a-drop-down3');

let dropService = document.querySelector('.drop-service');
let dropConsulting = document.querySelector('.drop-consulting');
let dropIndustries = document.querySelector('.drop-industries');





let isHamburgerClicked = false;

function handleSideBar(){
    if(!isHamburgerClicked){
        console.log("Sidebar opened");
        console.log(`${isHamburgerClicked}`);
        isHamburgerClicked = true;
        // heading.innerHTML = 'sidebar opened';
        // sideBar.classList.remove('sidebar-hide');
        // sideBar.classList.add('sidebar-show');
        // sideBar.style.display = "block";
        sideBar.classList.toggle('d-show');
        // hamburgerLine3.style.display = "none";
        hamburgerLine1.classList.toggle('ham1');
        hamburgerLine2.classList.toggle('ham2');
        hamburgerLine3.classList.toggle('ham3');



    }
    else {
        console.log("Sidebar closed");
        console.log(`${isHamburgerClicked}`);
        isHamburgerClicked = false;
        // heading.innerHTML = 'sidebar closed';
        // sideBar.classList.remove('sidebar-show');
        // sideBar.classList.add('sidebar-hide');
        // sideBar.style.display = "none";
        sideBar.classList.toggle('d-show');
        // hamburgerLine3.style.display = "block";
        hamburgerLine1.classList.toggle('ham1');
        hamburgerLine2.classList.toggle('ham2');
        hamburgerLine3.classList.toggle('ham3');









    }
}



hamburgerIcon.addEventListener("click",handleSideBar);
aDropDown1.addEventListener('click',(event)=>{
    event.preventDefault();
    dropService.classList.toggle('drop-show');
});
aDropDown2.addEventListener('click',(event)=>{
    event.preventDefault();
    dropConsulting.classList.toggle('drop-show');

});
aDropDown3.addEventListener('click',(event)=>{
    event.preventDefault();
    dropIndustries.classList.toggle('drop-show');

});
