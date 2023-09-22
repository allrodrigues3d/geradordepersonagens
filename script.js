// ... (seu código JavaScript existente)

// Evento de clique no botão "Editar Opções"
editButton.addEventListener("click", () => {
    editOptionsContainer.style.display = "block";
});

// Evento de clique no botão "Salvar"
saveOptionsButton.addEventListener("click", () => {
    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    // Atualize as opções nas fatias da roleta
    const slices = document.querySelectorAll(".slice");
    slices[0].textContent = option1; // Atualize a primeira fatia
    slices[1].textContent = option2; // Atualize a segunda fatia
    // Adicione mais atualizações conforme necessário para cada fatia
    editOptionsContainer.style.display = "none";
});
