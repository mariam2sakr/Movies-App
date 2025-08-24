window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 15) { 
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});  
// //////////////////////////////////////////////////////////////////////////////////////// 
const images = [
  {src:"images/m1.jpg" , title:"Venom" , desc:"120m | Action"},
  {src:"images/m2.jpg" , title:"Dunkerk" , desc:"105m | Adventure"},
  {src:"images/m3.jpg" , title:"Batman & Superman" , desc:"100m | Thriller"},
  {src:"images/m4.jpg" , title:"John Wick2" , desc:"120m | Adventure"},
  {src:"images/m5.jpg" , title:"Aquaman" , desc:"130m | Action"},
  {src:"images/m6.jpg" , title:"Black Panther" , desc:"90m | Thriller"},
  {src:"images/m7.jpg" , title:"Thor" , desc:"130m | Action"},
  {src:"images/m8.png" , title:"Bumblebee" , desc:"100m | Thriller"},
  {src:"images/m9.jpg" , title:"Mortal Engines" , desc:"100m | Action"},
  {src:"images/m10.jpg" , title:"UnderWorld Blood Wars" , desc:"100m | Action"}
]
const container = document.getElementById("cardsContainer");
 images.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.src}">
        <h5>${item.title}</h5>
        <p>${item.desc}</p>
      </div>
    `;
  });

// //////////////////////////////////////////////////////////////////////////////////////// 
const images2 = [
  {src:"images/coming1.jpg" , title:"Joney English" , desc:"80min | Comedy"},
  {src:"images/coming2.jpg" , title:"WarCrafet" , desc:"120min | Action"},
  {src:"images/coming3.jpg" , title:"Rampage" , desc:"108min | Adventure"},
  {src:"images/coming4.jpg" , title:"Airon Lady" , desc:"120min | Comedy"},
  {src:"images/coming5.jpg" , title:"Justice League" , desc:"120min | Adventure"},
  {src:"images/coming6.jpeg" , title:"Doctor Strange" , desc:"120min | Adventure"},
  {src:"images/coming7.jpg" , title:"Captain Marvel" , desc:"120min | Adventure"},
  {src:"images/coming8.jpg" , title:"Black Widow" , desc:"90min | Action"},
  {src:"images/coming9.jpg" , title:"Ant-Man" , desc:"110min | Adventure"},
  {src:"images/coming10.jpg" , title:"Guardiance Of The Galaxy" , desc:"120min | Adventure"}
]
const container2 = document.getElementById("cardsContainer2");
 images2.forEach(item => {
    container2.innerHTML += `
      <div class="card">
        <img src="${item.src}">
        <h5>${item.title}</h5>
        <p>${item.desc}</p>
      </div>
    `;
  });

  // //////////////////////////////////////////////////////////////////////////////////////// 
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});