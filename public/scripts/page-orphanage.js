const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Criando o mapa
const map = L.map("map", options).setView([-3.7749729,-38.5753415], 14);

// Adicionando o mapa ao meu site
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Criando o Icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Criando o marcador
L
.marker([-3.7749729,-38.5753415], { icon })
.addTo(map)


/* Criando a galeria de imagens */

function selectImage(event) {
    const button = event.currentTarget
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button) {
        button.classList.remove("active")
}

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src

button.classList.add('active')

}