// Ativar Links no menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = window.location.href;
  const href = link.href;

  
  if(url.includes(href)){
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink)

// Ativar Items do Orçamento 

//const parametros = new URLSearchParams(location.search);
const parametroArray = location.search.replace('&','=').split('=');
const arrayLimpo = [parametroArray[1],  parametroArray[3]];

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento != null){
    elemento.checked = true;
  }
}

arrayLimpo.forEach(ativarProduto);

// perguntas frequentes 

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta (event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);
  const ativo = resposta.classList.contains('ativo');
  resposta.classList.toggle('ativo');
  pergunta.setAttribute("aria-expanded",ativo);
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// galeria de bicicleta 

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem (evento) {
  const midia = matchMedia('(min-width:1000px)');
  const img = evento.currentTarget;
  if(midia.matches){
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(imagem){
  imagem.addEventListener('click',trocarImagem);
}

galeria.forEach(eventosGaleria);

// animaçao 

if(window.SimpleAnime){
  new SimpleAnime();
}


