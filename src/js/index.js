console.log(document.querySelector(".botao-trailer"))

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video")
console.log(video.src);
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})




