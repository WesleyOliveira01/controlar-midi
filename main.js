const teclas = document.querySelectorAll(".tecla");

function tocaSom(idAudio) {
  document.querySelector(idAudio).play();
}

for (let i = 0; i < teclas.length; i++) {
  const tecla = teclas[i];

  const instrumentos = tecla.classList[1];

  const som = `#som_${instrumentos}`;

  tecla.onclick = function () {
    tocaSom(som);
  };
}
