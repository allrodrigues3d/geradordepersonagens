// Array para armazenar as opções
let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Função para exibir as opções na página
function displayOptions() {
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = options.map(option => `<p>${option}</p>`).join("");
}

// Função para abrir a caixa de diálogo de edição de opções
document.getElementById("editButton").addEventListener("click", () => {
    const newOptions = prompt("Digite as novas opções separadas por vírgula (ex: 11, 12, 13):");
    if (newOptions !== null) {
        options = newOptions.split(",").map(option => parseInt(option.trim(), 10));
        displayOptions();
    }
});

// Função para rolar a roleta
document.getElementById("spinButton").addEventListener("click", () => {
    const result = options[Math.floor(Math.random() * options.length)];
    alert(`Opção selecionada: ${result}`);
});

// Exibir as opções iniciais na página
displayOptions();
