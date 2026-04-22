const dropdown = document.querySelector(".dropdown");
const btn = document.querySelector(".dropdown-btn");
const opciones = document.querySelectorAll(".dropdown-content p");
const señales = document.querySelectorAll(".señales__div");

btn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

opciones.forEach(opcion => {
  opcion.addEventListener("click", () => {
    const filtro = opcion.dataset.filter;

    btn.textContent = opcion.textContent;
    dropdown.classList.remove("active");

    señales.forEach(señal => {
      if (filtro === "Todas") {
        señal.style.display = "flex";
      } else {
        señal.style.display = señal.classList.contains(filtro) ? "flex" : "none";
      }
    });
  });
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

const btnTema = document.getElementById("button-mode");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

