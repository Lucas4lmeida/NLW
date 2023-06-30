//Tipos de dados
//String ""
// Number 0123
// Object {}
// Boolean true or false
//Array []

// Criando o mapa
const map = L.map("map").setView([-3.7910897,-38.5513984], 12);

// Adicionando o mapa ao meu site
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Criando o Icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Criando o Popup
const popup = L.popup({
    closeButton: false,
    className:'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Abrigo Tia Júlia <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

// Criando o marcador
L
.marker([-3.7749588,-38.6048183], { icon })
.addTo(map)
.bindPopup(popup)


