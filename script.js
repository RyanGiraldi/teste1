// Fundo claro animado
window.addEventListener("load", ()=> {
    const video = document.createElement("video");
    const fundoVideo = document.querySelector(".fundovideo")

    console.log(video);

    video.src = "fundoluffy-manha.mp4";
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // quando carregar
    video.style.opacity = 0;

    video.addEventListener("canplaythrough", ()=> {
        video.style.opacity = 1;
    })

    fundoVideo.appendChild(video); 
})

