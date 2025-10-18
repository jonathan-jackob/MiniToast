document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const menu = [
    { title: "Inicio", url: "index.html" },
    { title: "Todas las Configuraciones", url: "toast-all-configuration.html" },
    { title: "Métodos de Mostrar", url: "toast-show-methods.html" },
    { title: "Tamaños", url: "toast-sizes.html" },
    { title: "Con Borde Izquierdo", url: "toast-with-border-left.html" },
    { title: "Sin Iconos", url: "toast-without-icons.html" },
  ];

  if (navbar) {
    navbar.classList.add("navbar");
    // obtenemos de la url actual, la url de la pagina actual
    const currentPage = window.location.pathname;

    navbar.innerHTML = menu
      .map((item) => {
        const classActive = currentPage.includes(item.url) ? "active" : "";
        return '<a href="' + item.url + '" class="' + classActive + '">' + item.title + "</a>";
      })
      .join("");
  }
});
