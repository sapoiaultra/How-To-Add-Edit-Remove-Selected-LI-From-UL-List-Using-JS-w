let inputText = document.getElementById("txt"),
  items = document.querySelectorAll("#list li"),
  tab = [], index;

//obtenha o índice li selecionado usando array
//preencher array com valores li
for(let i =0; i < items.length; i++){
  tab.push(items[i].innerHTML);
}

//obter li index onclick
for(let i =0; i < items.length; i++){
  items[i].onclick = function(){
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " INDEX = " + index);

    //defina o valor li selecionado no texto de entrada
    inputText.value = this.innerHTML;
  };
}

function refreshArray(){
  //Limpar array
  tab.length = 0;
  items = document.querySelectorAll('#list li');
  
  //preencher array
  for(let i =0; i < items.length; i++){
  tab.push(items[i].innerHTML);
  }
}

function addLI(){

  let listNode = document.getElementById("list"),
    textNode = document.createTextNode(inputText.value),
    liNode = document.createElement("LI");

  liNode.appendChild(textNode);
  listNode.appendChild(liNode);

  refreshArray();

  //adicionar evento ao novo LI
  liNode.onclick = function(){
    index = tab.indexOf(liNode.innerHTML);
    console.log(liNode.innerHTML + " INDEX = " + index);

    //defina o valor li selecionado no texto de entrada
    inputText.value = liNode.innerHTML;
  };
}

function editLI(){
  //edite o li selecionado usando o texto de entrada
  items[index].innerHTML = inputText.value;
  refreshArray();
}

function deleteLI(){

  refreshArray();
  if(items.length > 0){
    items[index].parentNode.removeChild(items[index]);
    inputText.value = "";
  }
  
}