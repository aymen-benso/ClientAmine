let favs = document.querySelectorAll(".detail-favorites");

favs.forEach(fav => {
    fav.addEventListener("click", function() {
        if (fav.getAttribute("name") === "bookmark-outline") {
            fav.setAttribute("name", "bookmark");
        } else {
            fav.setAttribute("name", "bookmark-outline");
        }
    });
});
