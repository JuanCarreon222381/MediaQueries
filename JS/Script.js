
js
Copiar
Editar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".content");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.remove("active");
            });

            document.getElementById(target).classList.add("active");
        });
    });
});