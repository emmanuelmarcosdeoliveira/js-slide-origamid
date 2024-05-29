import "./src/script/script.js";
import "./src/script/modules/slide.js";
import "./src/styles/styles.css";
document.querySelector("#app").innerHTML = `
  <div class="slide-wrapper">
    <ul class="slide">
       <li><img src="./foto1.jpg" alt="Raposa Vermelha " />
       <li><img src="./foto2.jpg" alt="Raposa Vermelha " />
       <li><img src="./foto3.jpg" alt="Raposa Vermelha " />
       <li><img src="./foto4.jpg" alt="Raposa Vermelha " />
       <li><img src="./foto5.jpg" alt="Raposa Vermelha " />
       <li><img src="./foto6.jpg" alt="Raposa Vermelha " />
   </ul>
  </div>
`;
