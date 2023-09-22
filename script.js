const roulette = document.getElementById("roulette");
const spinButton = document.getElementById("spinButton");
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
const numSlices = colors.length;
const angle = 360 / numSlices;

// Criação das fatias coloridas na roleta
for (let i = 0; i < numSlices; i++) {
    const slice = document.createElement("div");
    slice.className = "slice";
    slice.style.clipPath = `polygon(50% 50%, 0 0, 100% 0)`;
    slice.style.transform = `rotate(${angle * i}deg)`;
    slice.style.backgroundColor = colors[i];
    roulette.appendChild(slice);
}

// Função para girar a roleta
function spinRoulette() {
    const randomAngle = Math.floor(Math.random() * 3600) + 1800; // Gira pelo menos 5 voltas
    roulette.style.transition = "transform 3s ease-out";
    roulette.style.transform = `rotate(${randomAngle}deg)`;
}

// Adiciona evento de clique ao botão "ROLAR"
spinButton.addEventListener("click", () => {
    roulette.style.transition = "none"; // Remove a transição para evitar cliques repetidos
    spinRoulette();
});
