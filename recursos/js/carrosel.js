let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll(".carrosel img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selecionado")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selecionado")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)