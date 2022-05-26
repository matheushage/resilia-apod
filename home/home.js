function api(dataDesejada) {
  $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=ZHXwp00Yht2aLLD269hv9TnQQIRleeSQH3NEZWM3&date=${dataDesejada}`,
      success: function(results) {
          criarPagina(results);
      },
      error: function(error) {
          console.log(error)
          
      }
  })
}


let botao = document.getElementById('submit');

botao.addEventListener('click', function(event){
  event.preventDefault();
  let textoData = document.getElementById('data').value
  try {
      if (textoData >= "1995-06-16") {
          api(textoData);
      } else {
          throw new Error("Por favor, digite uma data acima de 16 de junho de 1995")
      }
      
  } catch(error) {    
      alert(error)
  }
  
})  


let corpoDoTexto = document.querySelector('.data-info');

function criarPagina(astrologyInfo) {
  if(astrologyInfo.media_type == "image") {
      corpoDoTexto.style.display = 'flex';
      corpoDoTexto.style.flexDirection = "column";
      corpoDoTexto.style.justifyContent = "center";
      corpoDoTexto.style.alignItems = "center";
      corpoDoTexto.innerHTML = `
      <h1>${astrologyInfo.title}</h1>
      <img width="650" height="400" src="${astrologyInfo.hdurl}" alt="imagem">
      <p>${astrologyInfo.explanation}</p>
      `
  } else if (astrologyInfo.media_type == "video") {
      corpoDoTexto.style.display = 'flex';
      corpoDoTexto.style.flexDirection = "column";
      corpoDoTexto.style.justifyContent = "center";
      corpoDoTexto.style.alignItems = "center";
      corpoDoTexto.innerHTML = `
      <h1>${astrologyInfo.title}</h1>
      <iframe width="650" height="400" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  src="${astrologyInfo.url}" frameborder="0"></iframe>
      <p>${astrologyInfo.explanation}</p>
      `
  }
  
}