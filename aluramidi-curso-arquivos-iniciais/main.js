function tocarAudio(seletorAudio) {
    const audioElement = document.querySelector(seletorAudio);
    audioElement.play();
  }
  
  const teclas = document.querySelectorAll('.tecla');
  
  teclas.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const audioElementId = `#som_${instrumento}`;
    
    function onTeclaClick() {
      tocarAudio(audioElementId);
    }
    
    tecla.addEventListener('click', onTeclaClick);
  });
      