let ul=document.getElementById("navbar__list");   

/// li elements ///
let li1=document.createElement("li");   
let li2=document.createElement("li");
let li3=document.createElement("li");
let li4=document.createElement("li");

li1.id="section11"
li2.id="section22"
li3.id="section33"
li4.id="section44"

/// anchor elements ///
let a1=document.createElement("a");
let a2=document.createElement("a");
let a3=document.createElement("a");
let a4=document.createElement("a");

a1.href="#section1";
a2.href="#section2";
a3.href="#section3";
a4.href="#section4";

a1.textContent="section1";
a2.textContent="section2";
a3.textContent="section3";
a4.textContent="section4";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);


//////// show active nav items //////
const litems=[li1,li2,li3,li4];
const aitems=[a1,a2,a3,a4];

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
        a.classList.remove("active2");
        if (a.textContent===current) {
              a.classList.add("active2");
        }
      });
  });
};