resultados = []

const calculodavelocidademedia = function(){ 
    let valordeslocamento = document.getElementById('valordeslocamento').value
    let valorintervalodetempo = document.getElementById('valorintervalodetempo').value
    let velocidademedia = parseFloat(valordeslocamento) / parseFloat(valorintervalodetempo);
    resultados.push(velocidademedia)
    document.getElementById("velocidademedia").value = resultados
}

const deletarinformações = function(){

}