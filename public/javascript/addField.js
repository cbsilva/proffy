// Procurar o botao
document.querySelector('#add-time')
        .addEventListener('click', cloneField);
// Clicar no botao

// Executar uma acao
function cloneField() {
    
    // Duplicar os campos
    // retorna uma copia de todos os elementos do .schedule-item    
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos do formulario
    const fields = newFieldContainer.querySelectorAll('input')
    
    // para cada campo limpar
    fields.forEach(function(field) {

        // pega o field do momento e limpa ele
        field.value = ""

    })


    //colocar aonde ???
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    // Duplicar o campos

    // Colocar na página