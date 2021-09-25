let ul=document.getElementById("navbar__list");   

const sections2 = Array.from(document.getElementsByTagName("section"));

let counter=1;
for(section of sections2){
    const listItem = document.createElement('li');
    listItem.id=`section${counter}${counter}`;
    listItem.classList.add("nav-li");
    const a=document.createElement("a");
    a.href=`#section${counter}`;
    a.classList.add("nav-a");
    a.textContent=`section${counter}`
    listItem.appendChild(a);
    listItem.addEventListener("click",(e)=>{
        let section1=document.getElementById(e.target.id.slice(0,e.target.id.length-1));
        console.log(section1);
        section1.scrollIntoView(true);
    })
    ul.appendChild(listItem);
    counter++;
  }




//////// show active nav items //////
const litems=Array.from(document.getElementsByClassName("nav-li"));
const aitems=Array.from(document.getElementsByClassName("nav-a"));
console.log(aitems);

const sections = document.querySelectorAll("section");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });
  litems.forEach((li) => {
    li.classList.remove("active");
    if (li.id.slice(0,li.id.length-1)===current) {
          li.classList.add("active");
    }
    aitems.forEach((a) => {
        a.classList.remove("active");
        if (a.textContent===current) {
              a.classList.add("active");
        }
      });
  });
};