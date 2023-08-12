function addUser() {
    // Obtenha o valor do usuário através das ids player1_name_input e player2_name_input
    var player1Name = document.getElementById('player1_name_input').value;
    var player2Name = document.getElementById('player2_name_input').value;
    
    // Armazene esses valores localmente (por exemplo, em variáveis ou em armazenamento local)
    // Exemplo de armazenamento local:
    localStorage.setItem('player1', player1Name);
    localStorage.setItem('player2', player2Name);
    
    // Atribua "game_page.html" para window.location
    window.location = 'game_page.html';
}
