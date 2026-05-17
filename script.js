const buttons = document.querySelectorAll("#imagem-picker li");
const imagem = document.querySelector("#imagem-produto");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");
        
        imagem.classList.add("changing");
        imagem.setAttribute("src",`img/${id}.webp`);

        setTimeout(() => {

            imagem.classList.toggle("changing");

        }, 200)
    });
});