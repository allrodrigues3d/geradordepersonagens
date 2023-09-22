const roulette = document.getElementById("roulette");
const spinButton = document.getElementById("spinButton");
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
const numSlices = colors.length;

// Cria as fatias coloridas na roleta
for (let i = 0; i < numSlices; i++) {
    const slice = document.createElement("div");
    slice.className = "slice";
    slice.style.transform = `rotate(${(360 / numSlices) * i}deg)`;
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
