/*Toda vez que o calculate tip for chamado, serachamado pelo add listner */
function calculateTip(event){
    /*Este alerta trabalha com a AddListener e Submit do formulario;
    alert('Fui Submetido para a função') 
    ** A seguir existe a preventDefault para que nao recarregue
    e a pagina*/
    event.preventDefault();
    console.log(event);
    /*Pegar os valores ou campos do formulario*/
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfpeople = document.getElementById('people').value;

    /*Se estiver nao preenchido algum campo, o sistema envia alerta */
    if(bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores")
        /*retur serve para parar a função e impedir que execute os codigos acima */
        return;
    }
    /*Neste if irei verificar o numero de pessoas*/
    /*Lendo: Numero de pessoas vazio ou menor ou igual a 1*/
    if(numOfpeople = "" | numOfpeople <= 1){
        numOfpeople = 1 ;
        document.getElementById('each').style.display = "none"
    } /*Agora quando nao for apenas uma e seja mais de:  */
    else {
        document.getElementById('each').style.display = "block"
    }
    /*Fazendo a conta e total */
    let total =  (bill * serviceQual) / numOfpeople;
    /*Codigo para deixar apenas dois digitos no resultado */
    total = total.toFixed(2);
    /*Exibir o valor */
    /*Pegar  o resultado e incluir no campo certo */
    getElementById('tip').innerHTML = total;
    /*Codigo paramostrar o resultado BLOCK */
    document.getElementById('totalTip').style.display = "block";
}
/*Codigo para ocultar o resultado total do preço por enquanto; */
document.getElementById('totalTip').style.display ='none';
/*Codigo para ocultar resultado a gorjecta do preço por enquanto e por isso no fim é none; */
document.getElementById('each').style.display ='none';

/*Serve para controlar o Submit do form e add, que ira escutar a função 
e associar o evento da submissão com uma função*/
document.getElementById('tipsForm').addEventListener('submit', calculateTip);
























/*{
    /*alert('Fui submetido a função!') */ /*Serve para submeter a pagina */
   /* event.preventDefault(); /*Serve para parar de recarregar a pagina*/
    /*let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numeOfPeople = document.getElementById('people').value;

    if(bill == ''| serviceQual == 0){
        alert("Por favor, preencha os valores")
        return;
    }
    if (numeOfPeople == "" | numeOfPeople <=1){
        numeOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each'.style.display = "block")
    } 

    /*Conta do total */
    /*/*let total = (bill * serviceQual) / numeOfPeople;
    total = total.toFixed(2);
    

    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
    /*Antes estamos a mostrar o dodigo */
   /*}
/*Codigos para esconder */
/*document.getElementById('totalTip').style.display ="none";
document.getElementById('each').style.display = "none";
document.getElementById('tipsForm').addEventListener('submit', calculateTip);

/* Feche todo o codigo e depois leia o mesmo! Entre o que começa e depois o que esta
dentro dos parenteses curvos! A função nunca executa sozinha */