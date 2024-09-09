const form = document.getElementById('formulario');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById("nome");
    const inputTelefoneAgenda = document.getElementById("telefone");

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${inputNomeAgenda.value}</td>
        <td>${inputTelefoneAgenda.value}</td>
    `;

    linhas += novaLinha;

    // Adiciona a nova linha à tabela
    document.getElementById("contatos").appendChild(novaLinha);

    // Limpa os campos do formulário
    inputNomeAgenda.value = "";
    inputTelefoneAgenda.value = "";
});