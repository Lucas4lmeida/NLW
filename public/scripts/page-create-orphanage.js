// Criando o mapa
const map = L.map("map").setView([-3.7910897,-38.5513984], 12);

// Adicionando o mapa ao meu site
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Criando o Icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// Criando e adicionando o marcador

map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;
    // Removendo icone layer
    marker && map.removeLayer(marker)

    //Adicionando icone layer
    marker = L.marker([lat, lng], { icon }).addTo(map);

})


// Upload de fotos

function addPhotoField() {
    // Pegando o container de fotos #images
    const container = document.querySelector("#images");

    // Pegando o container para duplicar.new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload");

    // Realizando o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);



    // Limpar o campo de fotos antes de add ao container de imagens
    const input = newFieldContainer.children[0];
    if (input.value == "") {
        return
        // Caso o código encontre um "return", ele irá parar a execução do mesmo de forma imediata
    }
    input.value = "";
    // Adicionando o clone ao container de imagens
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    
}