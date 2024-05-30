var moyen = document.getElementById("moyen");
var vehicule = document.querySelector(".Demande-Vihecule");
var remarque = document.querySelector(".remarque");

moyen.addEventListener("change", function() {
    if (moyen.value === "vehicule" || moyen.value === "taxi") {
        vehicule.style.display = "block";
        remarque.style.display = "block";
    } else {
        vehicule.style.display = "none";
        remarque.style.display = "none";
    }
} )



