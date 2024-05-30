function changeTheme(primaryColor, secondaryColor) {
    document.documentElement.style.setProperty('--primaryColor', primaryColor);
    document.documentElement.style.setProperty('--secondaryColor', secondaryColor);
    localStorage.setItem('primaryColor', primaryColor);
    localStorage.setItem('secondaryColor', secondaryColor);
}

window.onload = function() {
    const primaryColor = localStorage.getItem('primaryColor');
    const secondaryColor = localStorage.getItem('secondaryColor');
    if (primaryColor && secondaryColor) {
        changeTheme(primaryColor, secondaryColor);
    }
};




var Liste = document.querySelector(".liste-employee")
function toggleUnderline(selectedItem) {
    const items = document.querySelectorAll('.administrateur nav ul li');
    items.forEach(item => {
        if (item === selectedItem) {
            item.classList.add( 'active' );
        } else {
            item.classList.remove('active');
        }
    });
}


